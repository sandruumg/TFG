import { db, eq, Libros, ListaTerminados} from 'astro:db';

//Obtener toda la lista de seguimiento
export const GET = async ({ params }:{params:{id:string}}) => {
    
    let terminados;
    if(!params){
        return new Response(null, {
            status: 404,
            statusText: 'Not found'
        });
    }else{      
      terminados =  await db.select({
            Titulo: Libros.tituloLibro, 
            Imagen: Libros.portadaLibro,
            Fecha: ListaTerminados.fechaTerminado
        }).from(ListaTerminados).innerJoin(Libros, eq(ListaTerminados.idLibro, Libros.idLibro)).where(eq(ListaTerminados.idUsuario, params.id)).orderBy(ListaTerminados.fechaTerminado);
    }
    console.log(terminados);
    return new Response(
        JSON.stringify(terminados), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
}
