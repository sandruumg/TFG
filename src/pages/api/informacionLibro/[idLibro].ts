import { db, Libros, eq, RankingLibros, sum, count} from 'astro:db';

export const GET = async ({ params }:{params:{idLibro:number}}) => {
    
    let libroEncontrado;
    let libroValorado;
    if(!params){
        return new Response(null, {
            status: 404,
            statusText: 'Not found'
        });
    }else{
        libroValorado = await db.select().from(RankingLibros).where(eq(RankingLibros.idLibro, params.idLibro))
        if(libroValorado.length > 0){
          libroEncontrado = await db.select({ cantidadEstrellas: sum(RankingLibros.estrellas),
                                              cantidadValoraciones: count(RankingLibros.idLibro),
                                              tituloLibro: Libros.tituloLibro,
                                              nombreAutor: Libros.nombreAutor,
                                              portadaLibro: Libros.portadaLibro,
                                              fondoLibro: Libros.fondoLibro,
                                              sinopsisLibro: Libros.sinopsisLibro,
                                              nPaginasLibro: Libros.nPaginasLibro,
                                              categoriaLibro: Libros.categoriaLibro,
                                              fechaPubLibro: Libros.fechaPubLibro})
                                    .from(Libros)
                                    .innerJoin(RankingLibros, eq(RankingLibros.idLibro, Libros.idLibro))
                                    .where(eq(Libros.idLibro, params.idLibro));
        }else {
          libroEncontrado = await db.select().from(Libros).where(eq(Libros.idLibro, params.idLibro));
        }
    }
    
    return new Response(
        JSON.stringify(libroEncontrado), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
}