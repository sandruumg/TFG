// header.js
import type { APIContext, APIRoute } from 'astro';
import { db, eq, Libros } from 'astro:db';
import { like } from 'drizzle-orm';


export async function POST(context:APIContext): Promise<Response> {
  const formData = await context.request.formData();
  const buscador = formData.get("buscador");

  //Validaciones
  if (!buscador) {
    return new Response("No has buscado nada", { status: 400 });
  }
  if (typeof buscador !== "string") {
    return new Response("El buscador no es una cadena");
  }
  const libroEncontrado = await db.select().from(Libros).where(like(Libros.tituloLibro, `%${buscador}%`));
  

  if (!libroEncontrado) {
    return new Response("No se ha encontrado ningun libro", { status: 400 });
  }

  return new Response(JSON.stringify(libroEncontrado), {
    status: 200,
    statusText: "OK",
    headers: {
      'Content-Type': 'application/json',
    }
  });
}


