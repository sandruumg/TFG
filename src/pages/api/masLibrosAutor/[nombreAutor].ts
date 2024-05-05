import { db, Libros, eq} from 'astro:db';

export const GET = async ({ params }:{params:{nombreAutor:string}}) => {
    
    let masDelAutor;
    if(!params){
        return new Response(null, {
            status: 404,
            statusText: 'Not found'
        });
    }else{
        masDelAutor = await db.select().from(Libros).where(eq(Libros.nombreAutor, params.nombreAutor));
    }
    console.log(masDelAutor);
    return new Response(
        JSON.stringify(masDelAutor), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
}