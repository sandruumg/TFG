import { db, Libros, like} from 'astro:db';

export const GET = async ({ params }:{params:{buscador:string}}) => {
    
    let librosEncontrados;
    if(!params){
        return new Response(null, {
            status: 404,
            statusText: 'Not found'
        });
    }else{
        librosEncontrados = await db.select().from(Libros).where(like(Libros.tituloLibro, `%${params.buscador}%`));
    }
    return new Response(
        JSON.stringify(librosEncontrados), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
    );
}