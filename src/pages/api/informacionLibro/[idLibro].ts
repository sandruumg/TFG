import { db, Libros, eq} from 'astro:db';

export const GET = async ({ params }:{params:{idLibro:number}}) => {
    
    let libroEncontrado;
    if(!params){
        return new Response(null, {
            status: 404,
            statusText: 'Not found'
        });
    }else{
        libroEncontrado = await db.select().from(Libros).where(eq(Libros.idLibro, params.idLibro));
    }
    console.log(libroEncontrado);
    return new Response(
        JSON.stringify(libroEncontrado), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
}