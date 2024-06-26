import type { APIContext, APIRoute } from 'astro';
import { lucia } from "../../auth";
import { Cookie, generateId } from "lucia";
import { Argon2id } from "oslo/password";
import { db, User, Session, eq} from 'astro:db';



export async function POST(context:APIContext): Promise<Response> {
    //Leer los datos del formulario
    const formData = await context.request.formData();
    const aliasUsuario = formData.get("aliasUsuario");
    const nombreUsuario = formData.get("nombreUsuario");
    const apellidoUsuario = formData.get("apellidoUsuario");
    const correoUsuario = formData.get("correoUsuario");
    const generoUsuario = formData.get("generoUsuario");
    const password = formData.get("password");
    
  
    //Validaciones datos formulario
    if (!aliasUsuario || !password || !correoUsuario) {
        return new Response("El nombre de usuario, contraseña y correo son obligatorios", { 
          status: 400 
        });
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
      if (typeof correoUsuario !== "string") {
        return new Response("El correo debe tener al menos 4 caracteres", {
          status: 400,
        });
      }
      if (typeof generoUsuario !== "string") {
        return new Response("El género no puede contener numeros", {
          status: 400,
        });
      }

      //Añadir restriccion para correo 
      if (typeof password !== "string" || password.length < 4) {
        return new Response("La contraseña debe tener como minimo 4 caracteres", {
          status: 400,
        });
      }
      const usuariosEncontrados = (await db.select().from(User).where(eq(User.aliasUsuario, aliasUsuario)));

      if (usuariosEncontrados.length > 0) {
          return new Response(JSON.stringify("Este usuario ya existe"), {
            status: 400,
          });
      }

     //Select para ver si existe el correo o alias
    //si no existe se crea, se hacen las validaciones se inserta y se crea la cookie
      const userId = generateId(15);
      const hashedPass = await new Argon2id().hash(password);

      await db.insert(User).values([
        {
            id: userId,
            aliasUsuario: aliasUsuario,
            nombreUsuario: nombreUsuario,
            apellidoUsuario: apellidoUsuario,
            correoUsuario: correoUsuario,
            generoUsuario: generoUsuario,
            password: hashedPass,
        }
      ]);
    
      const session = await lucia.createSession(userId,{});
      const sessionCookie = lucia.createSessionCookie(session.id);
      context.cookies.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );

      return new Response(JSON.stringify("Usuario registrado"), {
        status: 200,
      });
    
      //Si el usuario existe, sale mensjae de error


}