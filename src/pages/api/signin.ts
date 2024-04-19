import type { APIContext, APIRoute } from 'astro';
import {db, eq, User} from "astro:db";
import { Argon2id } from 'oslo/password';
import { lucia } from './auth';

export async function POST(context: APIContext):Promise<Response> {
    const formData = await context.request.formData();
    const aliasUsuario = formData.get("aliasUsuario");
    const password = formData.get("password");

    if (typeof aliasUsuario !== "string") {
        return new Response("Nombre no valido", {
          status: 400,
        });
    }

    if (typeof password !== "string") {
        return new Response("Contraseña no valida", {
          status: 400,
        });
    }
    
    const usuariosEncontrados = (await db.select().from(User).where(eq(User.aliasUsuario, aliasUsuario))).at(0);

    if (!usuariosEncontrados) {
        return new Response("Usuario o contraseña incorrectos", {
          status: 400,
        });
    }

    //Este if es por si queremos poner validacion por google u otra plataforma
    //Si te logeas con google no tienes contraseña por eso en la tabla la contraseña es opcional
   

   const validarPassword = await new Argon2id().verify(usuariosEncontrados.password, password);
   
   if (!usuariosEncontrados.password) {
        return new Response("Contraseña invalida", { status: 400,});
    }
   
    const session = await lucia.createSession(usuariosEncontrados.id,{});
    const sessionCookie = lucia.createSessionCookie(session.id);
    context.cookies.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );

    const nombreUsuario = usuariosEncontrados.aliasUsuario;

    return new Response(JSON.stringify(usuariosEncontrados.aliasUsuario), {
    status: 200,
    statusText: "OK",
    headers: {
      'Content-Type': 'application/json',
    }
  });

  

}