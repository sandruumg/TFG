import { db, Usuarios, Libros } from 'astro:db';

export default async function seed() {
    await db.insert(Usuarios).values([
        {
            idUsuario: 1234,
            aliasUsuario: "Prueba1",
            nombreUsuario: "Prueba",
            apellidoUsuario: "Prueba",
            correoUsuario: "prueba@prueba.com",
            contraseñaUsuario: "1234"
        },
        {
            idUsuario: 1,
            aliasUsuario: "Prueba2",
            nombreUsuario: "Prueba2",
            apellidoUsuario: "Prueb2",
            correoUsuario: "prueba2@prueba.com",
            contraseñaUsuario: "12344"
        }
    ]);

    await db.insert(Libros).values([
        {
            idLibro: 1,
            tituloLibro: "Como no escribí nuestra historia",
            nombreAutor: "Elisabeth Benavent",
            portadaLibro: "../public/imagenes/ComoNoEscribiNuestraHistoria.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 592,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2023-04-11") // date no sé si es correcto	
        },
		{
            idLibro: 2,
            tituloLibro: "Un cuento perfecto",
            nombreAutor: "Elisabeth Benavent",
            portadaLibro: "../public/imagenes/UnCuentoPerfecto.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 640,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2024-04-04") // date no sé si es correcto	
        },
		{
            idLibro: 3,
            tituloLibro: "El arte de engañar al karma",
            nombreAutor: "Elisabeth Benavent",
            portadaLibro: "../public/imagenes/Karma.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 696,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2022-03-03") // date no sé si es correcto	
        },
		{
            idLibro: 4,
            tituloLibro: "En los zapatos de Valeria (SAGA VALERIA 1)",
            nombreAutor: "Elisabeth Benavent",
            portadaLibro: "../public/imagenes/Valeria1.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 480,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2018-01-01") // date no sé si es correcto	
        },
		{
            idLibro: 5,
            tituloLibro: "Valeria en el espejo (SAGA VALERIA 2)",
            nombreAutor: "Elisabeth Benavent",
            portadaLibro: "../public/imagenes/Valeria2.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 368,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2020-01-01") // date no sé si es correcto	
        },
		{
            idLibro: 6,
            tituloLibro: "Valeria en blanco y negro (SAGA VALERIA 3)",
            nombreAutor: "Elisabeth Benavent",
            portadaLibro: "../public/imagenes/Valeria3.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 384,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2020-01-01") // date no sé si es correcto	
        },
		{
            idLibro: 7,
            tituloLibro: "Valeria al desnudo (SAGA VALERIA 4)",
            nombreAutor: "Elisabeth Benavent",
            portadaLibro: "../public/imagenes/Valeria4.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 544,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2018-01-01") // date no sé si es correcto	
        }
    ]);
}
