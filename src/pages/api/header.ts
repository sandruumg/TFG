// header.js
import type { APIContext, APIRoute } from 'astro';
import { db, eq } from 'astro:db';
import {Libros} from 'astro:db';

export async function POST(context:APIContext): Promise<Response> {
  const formData = await context.request.formData();
  const buscador = formData.get("buscador");
  console.log(buscador);

  //Validaciones
  if (!buscador) {
    return new Response("No has buscado nada", { status: 400 });
  }

  const libroEncontrado = await db.select().from(Libros).where(eq(Libros.tituloLibro,buscador));

  if (!libroEncontrado) {
    return new Response("No se ha encontrado ningun libro", { status: 400 });
  }

  return context.redirect("/src/pages/index.astro");
}


