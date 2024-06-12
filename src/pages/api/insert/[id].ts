import { db, eq, and, Libros, ListaSeguimiento, ListaTerminados} from 'astro:db';


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
    let idLibro;
    if(body.libroId){
      idLibro = body.libroId;
    }else if(body.idLibro){
      idLibro = body.idLibro;
    }
    const fechaTerminado = new Date();
    const allTerminados = await db.select().from(ListaTerminados).where(and(eq(ListaTerminados.idUsuario, idUsuario), eq(ListaTerminados.idLibro, idLibro)));

    if(allTerminados.length == 0){
      const deleteSeguimiento = await db.delete(ListaSeguimiento).where(and(eq(ListaSeguimiento.idUsuario, idUsuario), eq(ListaSeguimiento.idLibro, idLibro)));

      consulta = await db.insert(ListaTerminados).values({
        idLibro,
        idUsuario,
        fechaTerminado
      }).execute();

      return new Response(
        JSON.stringify({Respuesta:'Libro añadido a lista terminados'}), {
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