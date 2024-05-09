import { db, eq, Libros, RankingLibros} from 'astro:db';
import { desc} from 'drizzle-orm';

//Obtener toda la lista de seguimiento
export const GET = async ({ params }:{params:{id:string}}) => {
    
    let valoraciones;
    if(!params){
        return new Response(null, {
            status: 404,
            statusText: 'Not found'
        });
    }else{
        valoraciones =  await db.select({
            Titulo: Libros.tituloLibro, 
            Autor: Libros.nombreAutor,
            Imagen: Libros.portadaLibro,
            idLibro: Libros.idLibro,
            estrellas: RankingLibros.estrellas
        }).from(RankingLibros).innerJoin(Libros, eq(RankingLibros.idLibro, Libros.idLibro)).where(eq(RankingLibros.idUsuario, params.id));
    }
    console.log(valoraciones);
    return new Response(
        JSON.stringify(valoraciones), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
}


