import { db, eq, and, Libros, ListaSeguimiento} from 'astro:db';


//Boton para eliminar un libro de la lista de seguimiento del usuario
export const DELETE = async ({ params, request }:{params:{id:string}, request:Request}) => {
  //Comprobar que se han enviado datos en el body
  const body = await request.json();
  let consulta;
  if(!body){
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }else{
    //Coger los datos del body
    const user = params.id;
    const libro = body.libroId;
    
    consulta =   await db.delete(ListaSeguimiento).where(and(eq(ListaSeguimiento.idUsuario, user), eq(ListaSeguimiento.idLibro, libro)));
    return new Response(
      JSON.stringify({Respuesta:'Libro eliminado'}), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}