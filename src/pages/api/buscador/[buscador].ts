import { db, Libros, like, eq} from 'astro:db';

export const GET = async ({ params }:{params:{buscador:string}}) => {
    
    let librosEncontrados;
    if(!params){
        return new Response(null, {
            status: 404,
            statusText: 'Not found'
        });
    }else{
        const librosTitulo = await db.select().from(Libros).where(like(Libros.tituloLibro, `%${params.buscador}%`));
        const librosAutor = await db.select().from(Libros).where(like(Libros.nombreAutor, `%${params.buscador}%`));
        const librosCategoria = await db.select().from(Libros).where(like(Libros.categoriaLibro, `%${params.buscador}%`));
        
        librosEncontrados = [...librosTitulo, ...librosAutor, ...librosCategoria];
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