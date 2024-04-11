import type { APIContext, APIRoute } from 'astro';
import {generateId} from "lucia";
import {Argon2id} from "oslo/password";
import { db, Usuarios, Libros} from 'astro:db';
import { lucia } from './auth';

export async function POST(context:APIContext): Promise<Response> {
    //Leer los datos del formulario
    const formData = await context.request.formData();
    const aliasUsuario = formData.get("aliasUsuario");
    const nombreUsuario = formData.get("nombreUsuario");
    const apellidoUsuario = formData.get("apellidoUsuario");
    const correoUsuario = formData.get("correoUsuario");
    const contraseñaUsuario = formData.get("contraseñaUsuario");

    //Validaciones datos formulario
    if (!aliasUsuario || !contraseñaUsuario) {
        return new Response("El nombre de usuario y contraseña son obligatorios", { status: 400 });
      }
      if (typeof aliasUsuario !== "string" || aliasUsuario.length < 4) {
        return new Response("El nombre de usuario debe tener al menos 4 caracteres", {
          status: 400,
        });
      }

      if (typeof nombreUsuario !== "string") {
        return new Response("El nombre no puede contener numeros", {
          status: 400,
        });
      }

      if (typeof apellidoUsuario !== "string") {
        return new Response("El apellido debe tener al menos 4 caracteres", {
          status: 400,
        });
      }

      //Añadir restriccion para correo 
      if (typeof contraseñaUsuario !== "string" || contraseñaUsuario.length < 4) {
        return new Response("La contraseña debe tener como minimo 4 caracteres", {
          status: 400,
        });
      }
    
      //Insert 
      const userId = generateId(15);
      const hashedPass = await new Argon2id().hash(contraseñaUsuario);

      await db.insert(Usuarios).values([{
            idUsuario: userId,
            aliasUsuario: aliasUsuario,
            nombreUsuario: nombreUsuario,
            apellidoUsuario: apellidoUsuario,
            correoUsuario: correoUsuario,
            contraseñaUsuario: hashedPass,
        },]);
    
      // Generate session
      const session = await lucia.createSession(userId, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      context.cookies.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
      return context.redirect("/");

}