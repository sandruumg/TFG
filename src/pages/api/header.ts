// header.js
import type { APIContext, APIRoute } from 'astro';
import { db, eq, Libros } from 'astro:db';


export async function POST(context:APIContext): Promise<Response> {
  const formData = await context.request.formData();
  const buscador = formData.get("buscador");
  console.log(buscador);

  //Validaciones
  if (!buscador) {
    return new Response("No has buscado nada", { status: 400 });
  }
  if (typeof buscador !== "string") {
    return new Response("El buscador no es una cadena");
  }
  const libroEncontrado = await db.select().from(Libros).where(eq(Libros.tituloLibro,buscador));
  

  if (!libroEncontrado) {
    return new Response("No se ha encontrado ningun libro", { status: 400 });
  }

  return context.redirect("/");
}


