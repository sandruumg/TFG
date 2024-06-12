import { db, eq, Libros, ListaSeguimiento} from 'astro:db';

//Obtener toda la lista de seguimiento
export const GET = async ({ params }:{params:{id:string}}) => {
    
    let seguimiento;
    if(!params){
        return new Response(null, {
            status: 404,
            statusText: 'Not found'
        });
    }else{
        seguimiento =  await db.select({
            Titulo: Libros.tituloLibro, 
            Autor: Libros.nombreAutor,
            Imagen: Libros.portadaLibro,
            idLibro: Libros.idLibro,
        }).from(ListaSeguimiento).innerJoin(Libros, eq(ListaSeguimiento.idLibro, Libros.idLibro)).where(eq(ListaSeguimiento.idUsuario, params.id));
    }
    
    return new Response(
        JSON.stringify(seguimiento), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
}

//Boton para añadir un libro al seguimiento del usuario
export const POST = async ({ params, request }:{params:{id:string}, request:Request}) => {
    //Comprobar que se han enviado datos en el body
    //Coger los datos del body
    //Coger el id de usuario
    //Hacer consulta para guardar el libro que quiere meter en seguimiento
    const body = await request.json();
    return new Response(
        JSON.stringify('nada'), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
}