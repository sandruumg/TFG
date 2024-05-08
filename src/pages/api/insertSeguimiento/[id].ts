import { db, eq, and, ListaSeguimiento} from 'astro:db';

//Boton para añadir un libro al seguimiento del usuario
export const POST = async ({ params, request }:{params:{id:string}, request:Request}) => {
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
    const idUsuario = params.id;
    const idLibro = body.idLibro;
    const allSeguimiento = await db.select().from(ListaSeguimiento).where(and(eq(ListaSeguimiento.idUsuario, idUsuario), eq(ListaSeguimiento.idLibro, idLibro)));
    
    if(allSeguimiento.length == 0){
      consulta = await db.insert(ListaSeguimiento).values({
        idLibro,
        idUsuario
      }).execute();

      return new Response(
        JSON.stringify({Respuesta:'Libro añadido a lista seguimiento'}), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }else{
      return new Response(null, {
        status: 404,
        statusText: 'Not found'
      });
    }   
  }
}