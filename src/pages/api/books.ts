import type { APIRoute } from 'astro';
const libros = [
  { id: 1, nombre: "El señor de los anillos", titulo: "El señor de los anillos" },
  { id: 2, nombre: "Harry Potter", titulo: "Harry Potter y la piedra filosofal" },
  { id: 3, nombre: "Canción de Hielo y Fuego", titulo: "Juego de tronos" }
];
export const GET: APIRoute = async ({ params, request }) => {
    return new Response(
        JSON.stringify(libros), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
}