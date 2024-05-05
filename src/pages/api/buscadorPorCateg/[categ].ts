import { db, Libros, eq} from 'astro:db';

export const GET = async ({ params }:{params:{categ:string}}) => {
    
    let librosEncontrados;
    if(!params){
        return new Response(null, {
            status: 404,
            statusText: 'Not found'
        });
    }else{
        librosEncontrados = await db.select().from(Libros).where(eq(Libros.categoriaLibro, params.categ));
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