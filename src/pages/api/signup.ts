import type { APIContext, APIRoute } from 'astro';
import { lucia } from "../../auth";
import { Cookie, generateId } from "lucia";
import { Argon2id } from "oslo/password";
import { db, User, Session, eq} from 'astro:db';

export async function POST(context:APIContext): Promise<Response> {
    // Leer los datos del formulario
    const formData = await context.request.formData();
    const aliasUsuario = formData.get("aliasUsuario");
    const nombreUsuario = formData.get("nombreUsuario");
    const apellidoUsuario = formData.get("apellidoUsuario");
    const correoUsuario = formData.get("correoUsuario");
    const generoUsuario = formData.get("generoUsuario");
    const password = formData.get("password");
    
    // Función para crear respuestas de error JSON
    function errorResponse(message: string, status = 400) {
      return new Response(JSON.stringify({ error: message }), {
        status,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Validaciones datos formulario
    if (!aliasUsuario || !password || !correoUsuario) {
        return errorResponse("El nombre de usuario, contraseña y correo son obligatorios");
    }
    if (typeof aliasUsuario !== "string" || aliasUsuario.length < 4) {
        return errorResponse("El nombre de usuario debe tener al menos 4 caracteres");
    }
    if (typeof nombreUsuario !== "string") {
        return errorResponse("El nombre no puede contener números");
    }
    if (typeof apellidoUsuario !== "string") {
        return errorResponse("El apellido debe tener al menos 4 caracteres");
    }
    if (typeof correoUsuario !== "string") {
        return errorResponse("El correo debe tener al menos 4 caracteres");
    }
    if (typeof generoUsuario !== "string") {
        return errorResponse("El género no puede contener números");
    }
    if (typeof password !== "string" || password.length < 4) {
        return errorResponse("La contraseña debe tener como mínimo 4 caracteres");
    }

    // Verificar si el usuario ya existe
    const usuariosEncontrados = await db.select().from(User).where(eq(User.aliasUsuario, aliasUsuario));
    if (usuariosEncontrados.length > 0) {
        return errorResponse("Este usuario ya existe");
    }

    // Crear usuario nuevo
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
    
    // Crear sesión y cookie
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    context.cookies.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );

    // Respuesta éxito también en JSON
    return new Response(JSON.stringify({ message: "Usuario registrado" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });
}
