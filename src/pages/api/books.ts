import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
    return new Response(
        JSON.stringify(  { id: 1, nombre: "El señor de los anillos", titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", imagen: "/img/71oVTrHAylL._AC_UF894,1000_QL80_.jpg" },
        ), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
}