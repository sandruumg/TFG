import { db, eq, and, RankingLibros} from 'astro:db';

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
    const estrellas = body.estrellas;
    const puntuacion = await db.select().from(RankingLibros).where(and(eq(RankingLibros.idUsuario, idUsuario), eq(RankingLibros.idLibro, idLibro)));
    
    if(puntuacion.length == 0){
      consulta = await db.insert(RankingLibros).values({
        idLibro,
        idUsuario, 
        estrellas
      }).execute();

      return new Response(
        JSON.stringify({Respuesta:'Puntuacion añadida'}), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }else if(puntuacion.length > 0){
      consulta = await db.update(RankingLibros).set({estrellas: estrellas}).where(and(eq(RankingLibros.idUsuario, idUsuario), eq(RankingLibros.idLibro, idLibro)));

      return new Response(
        JSON.stringify({Respuesta:'Puntuacion modificada'}), {
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