import { db, User, Libros } from 'astro:db';

export default async function seed() {
    await db.insert(User).values([
        {
            idUsuario: '1234',
            aliasUsuario: "Prueba1",
            nombreUsuario: "Prueba",
            apellidoUsuario: "Prueba",
            correoUsuario: "prueba@prueba.com",
            contraseñaUsuario: "1234"
        },
        {
            idUsuario: '1',
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
			fondoLibro: "../public/imagenes fondo/comoNoFondo.png",
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
			fondoLibro: "../public/imagenes fondo/unCuentoFondo.png",
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
			fondoLibro: "../public/imagenes fondo/karmaFondo.png",
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
			fondoLibro: "../public/imagenes fondo/zapatosValeriaFondo.png",
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
			fondoLibro: "../public/imagenes fondo/valeriaEspejoFondo.png",
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
			fondoLibro: "../public/imagenes fondo/valeriaBlancoYNegroFondo.png",
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
			fondoLibro: "../public/imagenes fondo/valeriaAlDesnudoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 544,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2018-01-01") // date no sé si es correcto	
        },
		{
            idLibro: 8,
            tituloLibro: "Donde todo brilla",
            nombreAutor: "Alice Kellen",
            portadaLibro: "../public/imagenes/DondeTodoBrilla-removebg-preview.png",
			fondoLibro: "../public/imagenes fondo/DondeTodoBrilla.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 592,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2024-01-31") // date no sé si es correcto	
        },
		{
            idLibro: 9,
            tituloLibro: "El mapa de los anhelos",
            nombreAutor: "Alice Kellen",
            portadaLibro: "../public/imagenes/mapaDeLosAnhelos.png",
			fondoLibro: "../public/imagenes fondo/mapaAnhelosFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 496,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2023-02-01") // date no sé si es correcto	
        },
		{
            idLibro: 10,
            tituloLibro: "Todo lo que nunca fuimos (SAGA DEJA QUE OCURRA 1)",
            nombreAutor: "Alice Kellen",
            portadaLibro: "../public/imagenes/Todo lo que nunca fuimos.png",
			fondoLibro: "../public/imagenes fondo/TodoLQNFuimosFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 352,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2019-02-05") // date no sé si es correcto	
        },
		{
            idLibro: 11,
            tituloLibro: "Todo lo que somos juntos (SAGA DEJA QUE OCURRA 2)",
            nombreAutor: "Alice Kellen",
            portadaLibro: "../public/imagenes/Todo lo que somos juntos.png",
			fondoLibro: "../public/imagenes fondo/TodoLoQueSomosFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 384,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2019-04-30") // date no sé si es correcto	
        },
		{
            idLibro: 12,
            tituloLibro: "Castigo",
            nombreAutor: "Carme Chaparro",
            portadaLibro: "../public/imagenes/castigo (1) (1).png",
			fondoLibro: "../public/imagenes fondo/castigoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 464,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2024-04-17") // date no sé si es correcto	
        },
		{
            idLibro: 13,
            tituloLibro: "Delito",
            nombreAutor: "Carme Chaparro",
            portadaLibro: "../public/imagenes/delito (1).png",
			fondoLibro: "../public/imagenes fondo/delitoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 512,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2024-04-17") // date no sé si es correcto	
        },
		{
            idLibro: 14,
            tituloLibro: "La química del odio",
            nombreAutor: "Carme Chaparro",
            portadaLibro: "../public/imagenes/LaQuimicaDelOdio.png",
			fondoLibro: "../public/imagenes fondo/laQuimicaDelOdioFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 416,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2021-09-29") // date no sé si es correcto	
        },
		{
            idLibro: 15,
            tituloLibro: "No soy un monstruo",
            nombreAutor: "Carme Chaparro",
            portadaLibro: "../public/imagenes/NoSoyUnMonstruo (1).png",
			fondoLibro: "../public/imagenes fondo/monstruoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 336,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2021-09-29") // date no sé si es correcto	
        },
		{
            idLibro: 16,
            tituloLibro: "La grieta del silencio",
            nombreAutor: "Javier Castillo",
            portadaLibro: "../public/imagenes/laGrietaDelSilencio (1).png",
			fondoLibro: "../public/imagenes fondo/grietaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 448,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2024-04-16") // date no sé si es correcto	
        },
		{
            idLibro: 17,
            tituloLibro: "El cuco de cristal",
            nombreAutor: "Javier Castillo",
            portadaLibro: "../public/imagenes/ElCucoCristal-removebg-preview.png",
			fondoLibro: "../public/imagenes fondo/elCucoCristalFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 488,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2024-02-15") // date no sé si es correcto	
        },
		{
            idLibro: 18,
            tituloLibro: "El dia que se perdió la cordura (SAGA EL DIA QUE SE PERDIÓ LA CORDURA 1)",
            nombreAutor: "Javier Castillo",
            portadaLibro: "../public/imagenes/perdioLaCordura-removebg-preview.png",
			fondoLibro: "../public/imagenes fondo/perdioLaCorduraFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 456,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2019-05-09") // date no sé si es correcto	
        },
		{
            idLibro: 19,
            tituloLibro: "El dia que se perdió el amor (SAGA EL DIA QUE SE PERDIÓ LA CORDURA 2)",
            nombreAutor: "Javier Castillo",
            portadaLibro: "../public/imagenes/perdioElAmor-removebg-preview.png",
			fondoLibro: "../public/imagenes fondo/perdioElAmorFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 432,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2019-10-09") // date no sé si es correcto	
        }
		
    ]);
}
