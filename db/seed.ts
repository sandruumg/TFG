import { db, User, Libros, ListaSeguimiento, ListaTerminados, RankingLibros } from 'astro:db';
export default async function seed() {
    await db.insert(User).values([
        {
            id: '1234',
            aliasUsuario: "Prueba1",
            nombreUsuario: "Prueba",
            apellidoUsuario: "Prueba",
            correoUsuario: "prueba@prueba.com",
            generoUsuario: "H",
            password: "1234"
        },
        {
            id: '1',
            aliasUsuario: "Prueba2",
            nombreUsuario: "Prueba2",
            apellidoUsuario: "Prueb2",
            correoUsuario: "prueba2@prueba.com",
            generoUsuario: "M",
            password: "12344"
        },
        {
            id: '2',
            aliasUsuario: "Alex",
            nombreUsuario: "Alejandro",
            apellidoUsuario: "Algo",
            correoUsuario: "prueba3@prueba.com",
            generoUsuario: "H",
            password: "12344"
        },
        {
            id: '3',
            aliasUsuario: "Monica",
            nombreUsuario: "Monica",
            apellidoUsuario: "Algo",
            correoUsuario: "prueba4@prueba.com",
            generoUsuario: "M",
            password: "12344"
        }
        ,
        {
            id: '4',
            aliasUsuario: "Manuel",
            nombreUsuario: "Manuel",
            apellidoUsuario: "Algo",
            correoUsuario: "prueba5@prueba.com",
            generoUsuario: "H",
            password: "12344"
        },
        {
            id: '5',
            aliasUsuario: "Santiago",
            nombreUsuario: "Santiago",
            apellidoUsuario: "Algo",
            correoUsuario: "prueba6@prueba.com",
            generoUsuario: "H",
            password: "12344"
        },
        {
            id: '6',
            aliasUsuario: "Javi",
            nombreUsuario: "Javier",
            apellidoUsuario: "Algo",
            correoUsuario: "prueba7@prueba.com",
            generoUsuario: "H",
            password: "12344"
        },
        {
            id: '7',
            aliasUsuario: "David",
            nombreUsuario: "David",
            apellidoUsuario: "Algo",
            correoUsuario: "prueba8@prueba.com",
            generoUsuario: "H",
            password: "12344"
        },
        {
            id: '8',
            aliasUsuario: "Usuario1",
            nombreUsuario: "Usuario1",
            apellidoUsuario: "Algo",
            correoUsuario: "Usuario1@prueba.com",
            generoUsuario: "M",
            password: "12344"
        },
        {
            id: '9',
            aliasUsuario: "Usuario2",
            nombreUsuario: "Usuario2",
            apellidoUsuario: "Algo",
            correoUsuario: "Usuario2@prueba.com",
            generoUsuario: "M",
            password: "12344"
        },
        {
            id: '10',
            aliasUsuario: "Usuario3",
            nombreUsuario: "Usuario3",
            apellidoUsuario: "Algo",
            correoUsuario: "Usuario3@prueba.com",
            generoUsuario: "M",
            password: "12344"
        },
        {
            id: '11',
            aliasUsuario: "Usuario4",
            nombreUsuario: "Usuario4",
            apellidoUsuario: "Algo",
            correoUsuario: "Usuario4@prueba.com",
            generoUsuario: "M",
            password: "12344"
        },
        {
            id: '12',
            aliasUsuario: "Usuario5",
            nombreUsuario: "Usuario5",
            apellidoUsuario: "Algo",
            correoUsuario: "Usuario5@prueba.com",
            generoUsuario: "H",
            password: "12344"
        }
    ]);

    await db.insert(Libros).values([
        {
            idLibro: 1,
            tituloLibro: "Como no escribí nuestra historia",
            nombreAutor: "Elisabeth Benavent",
            portadaLibro: "/imagenes/ComoNoEscribiNuestraHistoria.png",
			fondoLibro: "/imagenes fondo/comoNoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 592,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2023-04-11") // date no sé si es correcto	
        },
		{
            idLibro: 2,
            tituloLibro: "Un cuento perfecto",
            nombreAutor: "Elisabeth Benavent",
            portadaLibro: "/imagenes/UnCuentoPerfecto.png",
			fondoLibro: "/imagenes fondo/unCuentoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 640,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2024-04-04") // date no sé si es correcto	
        },
		{
            idLibro: 3,
            tituloLibro: "El arte de engañar al karma",
            nombreAutor: "Elisabeth Benavent",
            portadaLibro: "/imagenes/Karma.png",
			fondoLibro: "/imagenes fondo/karmaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 696,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2022-03-03") // date no sé si es correcto	
        },
		{
            idLibro: 4,
            tituloLibro: "En los zapatos de Valeria (SAGA VALERIA 1)",
            nombreAutor: "Elisabeth Benavent",
            portadaLibro: "/imagenes/Valeria1.png",
			fondoLibro: "/imagenes fondo/zapatosValeriaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 480,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2018-01-01") // date no sé si es correcto	
        },
		{
            idLibro: 5,
            tituloLibro: "Valeria en el espejo (SAGA VALERIA 2)",
            nombreAutor: "Elisabeth Benavent",
            portadaLibro: "/imagenes/Valeria2.png",
			fondoLibro: "/imagenes fondo/valeriaEspejoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 368,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2020-01-01") // date no sé si es correcto	
        },
		{
            idLibro: 6,
            tituloLibro: "Valeria en blanco y negro (SAGA VALERIA 3)",
            nombreAutor: "Elisabeth Benavent",
            portadaLibro: "/imagenes/Valeria3.png",
			fondoLibro: "/imagenes fondo/valeriaBlancoYNegroFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 384,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2020-01-01") // date no sé si es correcto	
        },
		{
            idLibro: 7,
            tituloLibro: "Valeria al desnudo (SAGA VALERIA 4)",
            nombreAutor: "Elisabeth Benavent",
            portadaLibro: "/imagenes/Valeria4.png",
			fondoLibro: "/imagenes fondo/valeriaAlDesnudoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 544,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2018-01-01") // date no sé si es correcto	
        },
		{
            idLibro: 8,
            tituloLibro: "Donde todo brilla",
            nombreAutor: "Alice Kellen",
            portadaLibro: "/imagenes/DondeTodoBrilla-removebg-preview.png",
			fondoLibro: "/imagenes fondo/DondeTodoBrilla.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 592,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2024-01-31") // date no sé si es correcto	
        },
		{
            idLibro: 9,
            tituloLibro: "El mapa de los anhelos",
            nombreAutor: "Alice Kellen",
            portadaLibro: "/imagenes/mapaDeLosAnhelos.png",
			fondoLibro: "/imagenes fondo/mapaAnhelosFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 496,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2023-02-01") // date no sé si es correcto	
        },
		{
            idLibro: 10,
            tituloLibro: "Todo lo que nunca fuimos (SAGA DEJA QUE OCURRA 1)",
            nombreAutor: "Alice Kellen",
            portadaLibro: "/imagenes/Todo lo que nunca fuimos.png",
			fondoLibro: "/imagenes fondo/TodoLQNFuimosFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 352,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2019-02-05") // date no sé si es correcto	
        },
		{
            idLibro: 11,
            tituloLibro: "Todo lo que somos juntos (SAGA DEJA QUE OCURRA 2)",
            nombreAutor: "Alice Kellen",
            portadaLibro: "/imagenes/Todo lo que somos juntos.png",
			fondoLibro: "/imagenes fondo/TodoLoQueSomosFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 384,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2019-04-30") // date no sé si es correcto	
        },
		{
            idLibro: 12,
            tituloLibro: "Castigo",
            nombreAutor: "Carme Chaparro",
            portadaLibro: "/imagenes/castigo (1) (1).png",
			fondoLibro: "/imagenes fondo/castigoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 464,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2024-04-17") // date no sé si es correcto	
        },
		{
            idLibro: 13,
            tituloLibro: "Delito",
            nombreAutor: "Carme Chaparro",
            portadaLibro: "/imagenes/delito (1).png",
			fondoLibro: "/imagenes fondo/delitoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 512,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2024-04-17") // date no sé si es correcto	
        },
		{
            idLibro: 14,
            tituloLibro: "La química del odio",
            nombreAutor: "Carme Chaparro",
            portadaLibro: "/imagenes/LaQuimicaDelOdio.png",
			fondoLibro: "/imagenes fondo/laQuimicaDelOdioFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 416,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2021-09-29") // date no sé si es correcto	
        },
		{
            idLibro: 15,
            tituloLibro: "No soy un monstruo",
            nombreAutor: "Carme Chaparro",
            portadaLibro: "/imagenes/NoSoyUnMonstruo (1).png",
			fondoLibro: "/imagenes fondo/monstruoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 336,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2021-09-29") // date no sé si es correcto	
        },
		{
            idLibro: 16,
            tituloLibro: "La grieta del silencio",
            nombreAutor: "Javier Castillo",
            portadaLibro: "/imagenes/laGrietaDelSilencio (1).png",
			fondoLibro: "/imagenes fondo/grietaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 448,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2024-04-16") // date no sé si es correcto	
        },
		{
            idLibro: 17,
            tituloLibro: "El cuco de cristal",
            nombreAutor: "Javier Castillo",
            portadaLibro: "/imagenes/ElCucoCristal-removebg-preview.png",
			fondoLibro: "/imagenes fondo/elCucoCristalFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 488,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2024-02-15") // date no sé si es correcto	
        },
		{
            idLibro: 18,
            tituloLibro: "El dia que se perdió la cordura (SAGA EL DIA QUE SE PERDIÓ LA CORDURA 1)",
            nombreAutor: "Javier Castillo",
            portadaLibro: "/imagenes/perdioLaCordura-removebg-preview.png",
			fondoLibro: "/imagenes fondo/perdioLaCorduraFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 456,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2019-05-09") // date no sé si es correcto	
        },
		{
            idLibro: 19,
            tituloLibro: "El dia que se perdió el amor (SAGA EL DIA QUE SE PERDIÓ LA CORDURA 2)",
            nombreAutor: "Javier Castillo",
            portadaLibro: "/imagenes/perdioElAmor-removebg-preview.png",
			fondoLibro: "/imagenes fondo/perdioElAmorFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 432,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2019-10-09") // date no sé si es correcto	
        },
        {
            idLibro: 20,
            tituloLibro: "Cuento de hadas",
            nombreAutor: "Stephen King",
            portadaLibro: "/imagenes/cuentoDeHadas-removebg-preview.png",
			fondoLibro: "/imagenes fondo/cuentoDeHadasFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 856,
            categoriaLibro: "Fantasía",
            fechaPubLibro: new Date("2024-03-14") // date no sé si es correcto	
        },
        {
            idLibro: 21,
            tituloLibro: "Si te gusta la oscuridad",
            nombreAutor: "Stephen King",
            portadaLibro: "/imagenes/siTeGustaLaOscuridad-removebg-preview.png",
			fondoLibro: "/imagenes fondo/siTeGustaLaOscuridadFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 784,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2024-06-13") // date no sé si es correcto	
        },
        {
            idLibro: 22,
            tituloLibro: "Mr. Mercedes (SAGA BILL HODGES 1)",
            nombreAutor: "Stephen King",
            portadaLibro: "/imagenes/mrMercedes-removebg-preview.png",
			fondoLibro: "/imagenes fondo/mrMercedesFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 496,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2015-06-13") // date no sé si es correcto	
        },
        {
            idLibro: 23,
            tituloLibro: "Quien pierde paga (SAGA BILL HODGES 2)",
            nombreAutor: "Stephen King",
            portadaLibro: "/imagenes/quienPierde-removebg-preview.png",
			fondoLibro: "/imagenes fondo/quienPierdeFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 448,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2017-06-13") // date no sé si es correcto	
        },
        {
            idLibro: 24,
            tituloLibro: "Fin de guardia (SAGA BILL HODGES 3)",
            nombreAutor: "Stephen King",
            portadaLibro: "/imagenes/finDeGuardia-removebg-preview.png",
			fondoLibro: "/imagenes fondo/finDeGuardiaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 432,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2018-06-13") // date no sé si es correcto	
        },
        // aqui mal las url imagenes
        {
            idLibro: 25,
            tituloLibro: "Foxglove",
            nombreAutor: "Aladyn Grace",
            portadaLibro: "/imagenes/foxglove-removebg-preview.png",
			fondoLibro: "/imagenes fondo/foxgloveFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 416,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2023-05-09") // date no sé si es correcto	
        },
        {
            idLibro: 26,
            tituloLibro: "Belladonna",
            nombreAutor: "Aladyn Grace",
            portadaLibro: "/imagenes/Belladona-removebg-preview.png",
			fondoLibro: "/imagenes fondo/BelladonnaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 389,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2023-09-05") // date no sé si es correcto	
        },
        {
            idLibro: 27,
            tituloLibro: "La edad del sol",
            nombreAutor: "Bernard Torello",
            portadaLibro: "/imagenes/LaEdadDelSol-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LaEdadDelSolFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 448,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2024-04-04") // date no sé si es correcto	
        },
        {
            idLibro: 28,
            tituloLibro: "La guerra de los huracanes",
            nombreAutor: "Thea Guenzon",
            portadaLibro: "/imagenes/LaGuerraDeLosHuracanes-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LaGuerraDeLosHuracanesFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 512,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2024-02-13") // date no sé si es correcto	
        },
        {
            idLibro: 29,
            tituloLibro: "Té para los fantasmas",
            nombreAutor: "Chris vuklisevic",
            portadaLibro: "/imagenes/TeParaFantasmas-removebg-preview.png",
			fondoLibro: "/imagenes fondo/teParaLosFantasmasFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 416,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2024-03-28") // date no sé si es correcto	
        },
        {
            idLibro: 30,
            tituloLibro: "La promesa del dragón",
            nombreAutor: "Elisabeth Lim",
            portadaLibro: "/imagenes/LaPromesaDelDragon-removebg-preview.png",
			fondoLibro: "/imagenes fondo/laPromesaDelDragonFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 512,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2024-04-17") // date no sé si es correcto	
        },
        {
            idLibro: 31,
            tituloLibro: "Blackwater I LA RIADA",
            nombreAutor: "Michael Mcdowell",
            portadaLibro: "/imagenes/blackwater1-removebg-preview.png",
			fondoLibro: "/imagenes fondo/blackwater1Fondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 272,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2024-02-07") // date no sé si es correcto	
        },
        {
            idLibro: 32,
            tituloLibro: "Blackwater II EL DIQUE",
            nombreAutor: "Michael Mcdowell",
            portadaLibro: "/imagenes/blackwater2-removebg-preview.png",
			fondoLibro: "/imagenes fondo/blackwater2Fondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 272,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2024-02-21") // date no sé si es correcto	
        },
        {
            idLibro: 33,
            tituloLibro: "Blackwater III LA CASA",
            nombreAutor: "Michael Mcdowell",
            portadaLibro: "/imagenes/blackwater3-removebg-preview.png",
			fondoLibro: "/imagenes fondo/blackwater3Fondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 272,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2024-03-06") // date no sé si es correcto	
        },
        {
            idLibro: 34,
            tituloLibro: "Hojas de dedalera",
            nombreAutor: "Victoria Alvarez",
            portadaLibro: "/imagenes/HojasDedalera-removebg-preview.png",
			fondoLibro: "/imagenes fondo/hojasdedaleraFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 528,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2024-05-30") // date no sé si es correcto	
        },
        {
            idLibro: 35,
            tituloLibro: "Asesinato para principiantes",
            nombreAutor: "Holly Jackson",
            portadaLibro: "/imagenes/AsesinatoPrincipiantes-removebg-preview.png",
			fondoLibro: "/imagenes fondo/asesinatoPrincipiantesFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 448,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2022-05-30") // date no sé si es correcto	
        },
        {
            idLibro: 36,
            tituloLibro: "Desaparición para expertos",
            nombreAutor: "Holly Jackson",
            portadaLibro: "/imagenes/desaparicionExpertos-removebg-preview.png",
			fondoLibro: "/imagenes fondo/desaparicionExpertosFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 416,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2022-07-30") // date no sé si es correcto	
        },
        {
            idLibro: 37,
            tituloLibro: "Venganza para victimas",
            nombreAutor: "Holly Jackson",
            portadaLibro: "/imagenes/venganzaVictimas-removebg-preview.png",
			fondoLibro: "/imagenes fondo/venganzaVictimasFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 512,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2022-09-30") // date no sé si es correcto	
        },
        {
            idLibro: 38,
            tituloLibro: "Alguien está mintiendo",
            nombreAutor: "Karen M. Mcmanus",
            portadaLibro: "/imagenes/mintiendo-removebg-preview.png",
			fondoLibro: "/imagenes fondo/mintiendoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 352,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2017-09-30") // date no sé si es correcto	
        },
        {
            idLibro: 39,
            tituloLibro: "Alguien es el siguiente",
            nombreAutor: "Karen M. Mcmanus",
            portadaLibro: "/imagenes/siguiente-removebg-preview.png",
			fondoLibro: "/imagenes fondo/siguienteFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 384,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2020-09-30") // date no sé si es correcto	
        },
        {
            idLibro: 40,
            tituloLibro: "Alguien ha vuelto",
            nombreAutor: "Karen M. Mcmanus",
            portadaLibro: "/imagenes/vuelto-removebg-preview.png",
			fondoLibro: "/imagenes fondo/vueltoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 416,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2023-09-30") // date no sé si es correcto	
        },
        {
            idLibro: 41,
            tituloLibro: "Nosotros en la luna",
            nombreAutor: "Alice Kellen",
            portadaLibro: "/imagenes/NosotrosEnLaLuna-removebg-preview.png",
			fondoLibro: "/imagenes fondo/nosotrosEnLaLunaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 480,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2020-01-28") // date no sé si es correcto	
        },
        {
            idLibro: 42,
            tituloLibro: "Tu y yo, invencibles",
            nombreAutor: "Alice Kellen",
            portadaLibro: "/imagenes/TuYyoInvencibles-removebg-preview.png",
			fondoLibro: "/imagenes fondo/tuyyoInvenciblesFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 408,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2021-02-10") // date no sé si es correcto	
        },
        {
            idLibro: 43,
            tituloLibro: "No decepciones a tu padre",
            nombreAutor: "Carme Chaparro",
            portadaLibro: "/imagenes/NoDecepcionesATuPadre-removebg-preview.png",
			fondoLibro: "/imagenes fondo/noDecepcionesATuPadreFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 488,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2021-09-22") // date no sé si es correcto	
        },
        {
            idLibro: 44,
            tituloLibro: "Todo lo que sucedió con Miranda Huff",
            nombreAutor: "Javier Castillo",
            portadaLibro: "/imagenes/mirandaHuff-removebg-preview.png",
			fondoLibro: "/imagenes fondo/mirandaHuffFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 448,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2019-03-14") // date no sé si es correcto	
        },
        {
            idLibro: 45,
            tituloLibro: "La chica de nieve",
            nombreAutor: "Javier Castillo",
            portadaLibro: "/imagenes/LaChicaDeNieve-removebg-preview.png",
			fondoLibro: "/public/imagenes fondo/LaChicaDeNieveFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 512,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2022-02-24") // date no sé si es correcto	
        },
        {
            idLibro: 46,
            tituloLibro: "El pistolero (LA TORRE OSCURA 1)",
            nombreAutor: "Stephen King",
            portadaLibro: "/imagenes/ElPistolero-removebg-preview.png",
			fondoLibro: "/imagenes fondo/ElPistoleroFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 288,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2022-02-24") // date no sé si es correcto	
        },
        {
            idLibro: 47,
            tituloLibro: "La ciudad de las sombras",
            nombreAutor: "Victoria Alvarez",
            portadaLibro: "/imagenes/LaCiudadDeLasSombras__1_-removebg-preview.png",
			fondoLibro: "/imagenes fondo/laCiudadDeLasSombrasFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 472,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2017-11-13") // date no sé si es correcto	
        },
        {
            idLibro: 48,
            tituloLibro: "Blackwater IV LA GUERRA",
            nombreAutor: "Michael Mcdowell",
            portadaLibro: "/imagenes/LaGuerra-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LaGuerraFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 272,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2024-03-23") // date no sé si es correcto	
        },
        {
            idLibro: 49,
            tituloLibro: "Blackwater V LA FORTUNA",
            nombreAutor: "Michael Mcdowell",
            portadaLibro: "/imagenes/LaFortuna-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LaFortunaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 272,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2024-04-03") // date no sé si es correcto	
        },
        {
            idLibro: 50,
            tituloLibro: "Blackwater V LLUVIA",
            nombreAutor: "Michael Mcdowell",
            portadaLibro: "/imagenes/Lluvia-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LluviaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 272,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2024-04-17") // date no sé si es correcto	
        },
        {
            idLibro: 51,
            tituloLibro: "Casa de tierra y sangre (CIUDAD MEDIALUNA I)",
            nombreAutor: "Sarah J. Maas",
            portadaLibro: "/public/imagenes/CasaTierraSangre-removebg-preview.png",
			fondoLibro: "/public/imagenes fondo/CasaTierraSangreFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 816,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2024-05-16") // date no sé si es correcto	
        },
        {
            idLibro: 52,
            tituloLibro: "Casa de cielo y aliento (CIUDAD MEDIALUNA II)",
            nombreAutor: "Sarah J. Maas",
            portadaLibro: "/imagenes/CasaCieloAliento-removebg-preview.png",
			fondoLibro: "/imagenes fondo/CasaCieloAlientoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 816,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2024-05-16") // date no sé si es correcto	
        },
        {
            idLibro: 53,
            tituloLibro: "Una corte de rosas y espinas I",
            nombreAutor: "Sarah J. Maas",
            portadaLibro: "/imagenes/RosasYEspinas-removebg-preview.png",
			fondoLibro: "/imagenes fondo/RosasYEspinasFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 456,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2022-04-13") // date no sé si es correcto	
        },
        {
            idLibro: 54,
            tituloLibro: "Una corte de niebla y furia (UNA CORTE DE ROSAS Y ESPINAS II)",
            nombreAutor: "Sarah J. Maas",
            portadaLibro: "/imagenes/NieblaYFuria-removebg-preview.png",
			fondoLibro: "/imagenes fondo/NieblaYFuriaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 592,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2022-04-13") // date no sé si es correcto	
        },
        {
            idLibro: 55,
            tituloLibro: "Una corte de alas y ruina (UNA CORTE DE ROSAS Y ESPINAS III)",
            nombreAutor: "Sarah J. Maas",
            portadaLibro: "/imagenes/AlasYRuina-removebg-preview.png",
			fondoLibro: "/imagenes fondo/AlasYRuinaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 672,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2022-04-13") // date no sé si es correcto	
        },
        {
            idLibro: 56,
            tituloLibro: "Una corte de hielo y estrellas (UNA CORTE DE ROSAS Y ESPINAS IV)",
            nombreAutor: "Sarah J. Maas",
            portadaLibro: "/imagenes/HieloYEstrellas-removebg-preview.png",
			fondoLibro: "/imagenes fondo/HieloYEstrellasFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 272,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2022-04-13") // date no sé si es correcto	
        },
        {
            idLibro: 57,
            tituloLibro: "Una corte de llamas plateadas (UNA CORTE DE ROSAS Y ESPINAS V)",
            nombreAutor: "Sarah J. Maas",
            portadaLibro: "/imagenes/LlamasPlateadas-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LlamasPlateadasFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 688,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2021-11-10") // date no sé si es correcto	
        },
        {
            idLibro: 58,
            tituloLibro: "Anhelo (SERIE CRAVE 1)",
            nombreAutor: "Tracy WolfF",
            portadaLibro: "/imagenes/Anhelo-removebg-preview.png",
			fondoLibro: "/imagenes fondo/AnheloFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 672,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2021-11-10") // date no sé si es correcto	
        },
        {
            idLibro: 59,
            tituloLibro: "Furia (SERIE CRAVE 2)",
            nombreAutor: "Tracy WolfF",
            portadaLibro: "/imagenes/Furia-removebg-preview.png",
			fondoLibro: "/imagenes fondo/FuriaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 800,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2023-06-10") // date no sé si es correcto	
        },
        {
            idLibro: 60,
            tituloLibro: "Ansia (SERIE CRAVE 3)",
            nombreAutor: "Tracy WolfF",
            portadaLibro: "/imagenes/Ansia-removebg-preview.png",
			fondoLibro: "/imagenes fondo/AnsiaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 896,
            categoriaLibro: "Fantasia",
            fechaPubLibro: new Date("2023-10-04") // date no sé si es correcto	
        },
        {
            idLibro: 61,
            tituloLibro: "La sombra del viento (EL CEMENTERIO DE LOS LIBROS OLVIDADOS 1)",
            nombreAutor: "Carlos Ruiz Zafón",
            portadaLibro: "/imagenes/LaSombraDelViento-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LaSombraDelVientoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 592,
            categoriaLibro: "Contemporánea",
            fechaPubLibro: new Date("2016-10-11") // date no sé si es correcto	
        },
        {
            idLibro: 62,
            tituloLibro: "El juego del ángel (EL CEMENTERIO DE LOS LIBROS OLVIDADOS 2)",
            nombreAutor: "Carlos Ruiz Zafón",
            portadaLibro: "/imagenes/ElJuegodelAngel-removebg-preview.png",
			fondoLibro: "/imagenes fondo/ElJuegoDelAlgelFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 688,
            categoriaLibro: "Contemporánea",
            fechaPubLibro: new Date("2016-10-11") // date no sé si es correcto	
        },
        {
            idLibro: 63,
            tituloLibro: "El prisionero del cielo (EL CEMENTERIO DE LOS LIBROS OLVIDADOS 3)",
            nombreAutor: "Carlos Ruiz Zafón",
            portadaLibro: "/imagenes/ElPrisioneroDelCielo-removebg-preview.png",
			fondoLibro: "/imagenes fondo/ElPistoleroFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 384,
            categoriaLibro: "Contemporánea",
            fechaPubLibro: new Date("2016-10-11") // date no sé si es correcto	
        },
        {
            idLibro: 64,
            tituloLibro: "El laberinto de los espíritus (EL CEMENTERIO DE LOS LIBROS OLVIDADOS 4)",
            nombreAutor: "Carlos Ruiz Zafón",
            portadaLibro: "/imagenes/ElLaberintoDeLosEspiritus-removebg-preview.png",
			fondoLibro: "/imagenes fondo/ElLaberintoDeLosEspiritusFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 928,
            categoriaLibro: "Contemporánea",
            fechaPubLibro: new Date("2018-04-05") // date no sé si es correcto	
        },
        {
            idLibro: 65,
            tituloLibro: "El príncipe de la niebla",
            nombreAutor: "Carlos Ruiz Zafón",
            portadaLibro: "/imagenes/ElPrincipeDeLaNiebla-removebg-preview.png",
			fondoLibro: "/imagenes fondo/ElPrincipeDeLaNieblaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 240,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2007-05-16") // date no sé si es correcto	
        },
        {
            idLibro: 66,
            tituloLibro: "Luces de septiembre",
            nombreAutor: "Carlos Ruiz Zafón",
            portadaLibro: "/imagenes/LucesDeSeptiembre-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LucesDeSeptiembreFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 320,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2008-05-06") // date no sé si es correcto	
        },
        {
            idLibro: 67,
            tituloLibro: "Marina",
            nombreAutor: "Carlos Ruiz Zafón",
            portadaLibro: "/imagenes/Marina-removebg-preview.png",
			fondoLibro: "/imagenes fondo/MarinaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 360,
            categoriaLibro: "Contemporánea",
            fechaPubLibro: new Date("2024-04-06") // date no sé si es correcto	
        },
        {
            idLibro: 68,
            tituloLibro: "La cara norte del corazón",
            nombreAutor: "Dolores Redondo",
            portadaLibro: "/imagenes/LaCaraNorte-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LaCaraNorteFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 688,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2024-04-06") // date no sé si es correcto	
        },
        {
            idLibro: 69,
            tituloLibro: "Esperando al diluvio",
            nombreAutor: "Dolores Redondo",
            portadaLibro: "/imagenes/EsperandoAlDilubio-removebg-preview.png",
			fondoLibro: "/imagenes fondo/EsperandoAlDilubioFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 576,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2024-01-10") // date no sé si es correcto	
        },
        {
            idLibro: 70,
            tituloLibro: "Los privilegios del Ángel",
            nombreAutor: "Dolores Redondo",
            portadaLibro: "/imagenes/LosPrivileviosDelAngel-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LosPrivilegiosDelAngelFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 304,
            categoriaLibro: "Contemporánea",
            fechaPubLibro: new Date("2021-01-13") // date no sé si es correcto	
        },
        {
            idLibro: 71,
            tituloLibro: "Reina Roja (ANTONIA SCOTT 1)",
            nombreAutor: "Juan Gómez Jurado",
            portadaLibro: "/imagenes/ReinaRoja-removebg-preview.png",
			fondoLibro: "/imagenes fondo/ReinaRojaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 568,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2018-01-01") // date no sé si es correcto	
        },
        {
            idLibro: 72,
            tituloLibro: "Loba Negra (ANTONIA SCOTT 2)",
            nombreAutor: "Juan Gómez Jurado",
            portadaLibro: "/imagenes/LobaNegra-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LobaNegraFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 552,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2019-01-01") // date no sé si es correcto	
        },
        {
            idLibro: 73,
            tituloLibro: "Rey Blanco (ANTONIA SCOTT 3)",
            nombreAutor: "Juan Gómez Jurado",
            portadaLibro: "/imagenes/ReyBlanco-removebg-preview.png",
			fondoLibro: "/imagenes fondo/ReyBlancoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 528,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2020-01-01") // date no sé si es correcto	
        },
        {
            idLibro: 74,
            tituloLibro: "La hermandad de la sábana santa",
            nombreAutor: "Julia Navarro",
            portadaLibro: "/imagenes/SabanaBlanca-removebg-preview.png",
			fondoLibro: "/imagenes fondo/SabanaBlancaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 400,
            categoriaLibro: "Histórica",
            fechaPubLibro: new Date("2024-01-01") // date no sé si es correcto	
        },
        {
            idLibro: 75,
            tituloLibro: "Dispara, yo ya estoy muerto",
            nombreAutor: "Julia Navarro",
            portadaLibro: "/imagenes/DisparaYaEstoyMuerto-removebg-preview.png",
			fondoLibro: "/imagenes fondo/DisparaYaEstoyMuertoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 912,
            categoriaLibro: "Histórica",
            fechaPubLibro: new Date("2016-06-16") // date no sé si es correcto	
        },
        {
            idLibro: 76,
            tituloLibro: "Historia de un canalla",
            nombreAutor: "Julia Navarro",
            portadaLibro: "/imagenes/Canalla-removebg-preview.png",
			fondoLibro: "/imagenes fondo/CanallaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 864,
            categoriaLibro: "Histórica",
            fechaPubLibro: new Date("2016-02-10") // date no sé si es correcto	
        },
        {
            idLibro: 77,
            tituloLibro: "La sangre de los inocentes",
            nombreAutor: "Julia Navarro",
            portadaLibro: "/imagenes/SangreInocentes-removebg-preview.png",
			fondoLibro: "/imagenes fondo/SangreInocentesFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 784,
            categoriaLibro: "Histórica",
            fechaPubLibro: new Date("2008-01-02") // date no sé si es correcto	
        },
        {
            idLibro: 78,
            tituloLibro: "Tú no matarás",
            nombreAutor: "Julia Navarro",
            portadaLibro: "/imagenes/NoMataras-removebg-preview.png",
			fondoLibro: "/imagenes fondo/NoMatarasFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 992,
            categoriaLibro: "Histórica",
            fechaPubLibro: new Date("2021-01-02") // date no sé si es correcto	
        },
        {
            idLibro: 79,
            tituloLibro: "La biblia de barro",
            nombreAutor: "Julia Navarro",
            portadaLibro: "/imagenes/LaBibliaDeBarro-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LaBibliaDeBarroFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 768,
            categoriaLibro: "Histórica",
            fechaPubLibro: new Date("2006-01-02") // date no sé si es correcto	
        },
        {
            idLibro: 80,
            tituloLibro: "Sira",
            nombreAutor: "María Dueñas",
            portadaLibro: "/imagenes/Sira-removebg-preview.png",
			fondoLibro: "/imagenes fondo/SiraFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 656,
            categoriaLibro: "Contemporánea",
            fechaPubLibro: new Date("2022-06-29") // date no sé si es correcto	
        },
        {
            idLibro: 81,
            tituloLibro: "El tiempo entre costuras",
            nombreAutor: "María Dueñas",
            portadaLibro: "/imagenes/EntreCosturas-removebg-preview.png",
			fondoLibro: "/imagenes fondo/EntreCosturasFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 640,
            categoriaLibro: "Contemporánea",
            fechaPubLibro: new Date("2022-03-17") // date no sé si es correcto	
        },
        {
            idLibro: 82,
            tituloLibro: "El problema final",
            nombreAutor: "Arturo Pérez Reverte",
            portadaLibro: "/imagenes/ElProblemaFinal-removebg-preview.png",
			fondoLibro: "/imagenes fondo/ElProblemaFinalFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 328,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2023-05-09") // date no sé si es correcto	
        },
        {
            idLibro: 83,
            tituloLibro: "Falcó (FALCÓ 1)",
            nombreAutor: "Arturo Pérez Reverte",
            portadaLibro: "/imagenes/Falco-removebg-preview.png",
			fondoLibro: "/imagenes fondo/FalcoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 296,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2020-07-09") // date no sé si es correcto	
        },
        {
            idLibro: 84,
            tituloLibro: "Eva (FALCÓ 2)",
            nombreAutor: "Arturo Pérez Reverte",
            portadaLibro: "/imagenes/Eva-removebg-preview (1).png",
			fondoLibro: "/imagenes fondo/evaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 400,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2020-07-09") // date no sé si es correcto	
        },
        {
            idLibro: 85,
            tituloLibro: "Sabotaje (FALCÓ 3)",
            nombreAutor: "Arturo Pérez Reverte",
            portadaLibro: "/imagenes/Sabotaje-removebg-preview.png",
			fondoLibro: "/imagenes fondo/SabotajeFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 376,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2020-07-09") // date no sé si es correcto	
        },
        {
            idLibro: 86,
            tituloLibro: "El asedio",
            nombreAutor: "Arturo Pérez Reverte",
            portadaLibro: "/public/imagenes/Asedio-removebg-preview.png",
			fondoLibro: "/public/imagenes fondo/AsedioFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 816,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2020-07-09") // date no sé si es correcto	
        },
        {
            idLibro: 87,
            tituloLibro: "Una influencer muerta en París",
            nombreAutor: "Blue Jeans",
            portadaLibro: "/imagenes/InfluencerMuertaEnParis-removebg-preview.png",
			fondoLibro: "/imagenes fondo/InfluencerMuertaEnParisFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 528,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2024-04-10") // date no sé si es correcto	
        },
        {
            idLibro: 88,
            tituloLibro: "Los crímenes de Chopin",
            nombreAutor: "Blue Jeans",
            portadaLibro: "/imagenes/CrimenesDeChopin-removebg-preview.png",
			fondoLibro: "/imagenes fondo/CrimenesDeChopinFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 528,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2023-05-23") // date no sé si es correcto	
        },
        {
            idLibro: 89,
            tituloLibro: "La última medolía de Chopin",
            nombreAutor: "Blue Jeans",
            portadaLibro: "/imagenes/UltimaMelodia-removebg-preview.png",
			fondoLibro: "/imagenes fondo/UltimaMelodiaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 528,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2024-04-20") // date no sé si es correcto	
        },
        {
            idLibro: 90,
            tituloLibro: "El Campamento",
            nombreAutor: "Blue Jeans",
            portadaLibro: "/imagenes/Campamento-removebg-preview.png",
			fondoLibro: "/imagenes fondo/CampamentoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 472,
            categoriaLibro: "Terror",
            fechaPubLibro: new Date("2021-04-07") // date no sé si es correcto	
        },
        {
            idLibro: 91,
            tituloLibro: "La Chica Invisible (LA CHICA INVISIBLE 1)",
            nombreAutor: "Blue Jeans",
            portadaLibro: "/imagenes/LaChicaInvisible-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LaChicaInvisibleFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 544,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2022-04-07") // date no sé si es correcto	
        },
        {
            idLibro: 92,
            tituloLibro: "El puzzle de cristal (LA CHICA INVISIBLE 2)",
            nombreAutor: "Blue Jeans",
            portadaLibro: "/imagenes/PuzzleCristal-removebg-preview.png",
			fondoLibro: "/imagenes fondo/PuzzleCristalFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 544,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2021-04-07") // date no sé si es correcto	
        },
        {
            idLibro: 93,
            tituloLibro: "La promesa de Julia (LA CHICA INVISIBLE 3)",
            nombreAutor: "Blue Jeans",
            portadaLibro: "/imagenes/LaPromesa-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LaPromesaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 544,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2020-04-07") // date no sé si es correcto	
        },
        {
            idLibro: 94,
            tituloLibro: "Tampoco pido tanto",
            nombreAutor: "Megan Maxwell",
            portadaLibro: "/imagenes/TampocoPidoTanto-removebg-preview.png",
			fondoLibro: "/imagenes fondo/TampocoPidoTantoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 560,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2020-10-29") // date no sé si es correcto	
        },
        {
            idLibro: 95,
            tituloLibro: "¿A qué estas esperando?",
            nombreAutor: "Megan Maxwell",
            portadaLibro: "/imagenes/QueEstasEsperando-removebg-preview.png",
			fondoLibro: "/imagenes fondo/QueEstasEsperandoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 672,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2020-10-29") // date no sé si es correcto	
        },
        {
            idLibro: 96,
            tituloLibro: "¿Y si lo probamos...?",
            nombreAutor: "Megan Maxwell",
            portadaLibro: "/imagenes/LoProbamos-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LoProbamosFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 496,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2023-06-07") // date no sé si es correcto	
        },
        {
            idLibro: 97,
            tituloLibro: "Y ahora supera mi beso",
            nombreAutor: "Megan Maxwell",
            portadaLibro: "/imagenes/MiBeso-removebg-preview.png",
			fondoLibro: "/imagenes fondo/MiBesoFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 576,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2022-06-07") // date no sé si es correcto	
        },
        {
            idLibro: 98,
            tituloLibro: "¿Y a ti qué te pica?",
            nombreAutor: "Megan Maxwell",
            portadaLibro: "/imagenes/Pica-removebg-preview.png",
			fondoLibro: "/imagenes fondo/PicaFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 552,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2023-06-07") // date no sé si es correcto	
        },
        {
            idLibro: 99,
            tituloLibro: "Hay momentos que deberían ser eternos",
            nombreAutor: "Megan Maxwell",
            portadaLibro: "/public/imagenes/MomentosEternos-removebg-preview.png",
			fondoLibro: "/public/imagenes fondo/MomentosEternosFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 480,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2021-06-07") // date no sé si es correcto	
        },
        {
            idLibro: 100,
            tituloLibro: "¿Tu lo harías?",
            nombreAutor: "Megan Maxwell",
            portadaLibro: "/imagenes/LoHarias-removebg-preview.png",
			fondoLibro: "/imagenes fondo/LoHariasFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 488,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2023-06-07") // date no sé si es correcto	
        },
        // me queda insertar las imagenes (no están hechas)
        {
            idLibro: 101,
            tituloLibro: "El duque y yo",
            nombreAutor: "Julia Quinn",
            portadaLibro: "/public/imagenes/LoHarias-removebg-preview.png",
			fondoLibro: "/public/imagenes fondo/LoHariasFondo.png",
            sinopsisLibro: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            nPaginasLibro: 384,
            categoriaLibro: "Romance",
            fechaPubLibro: new Date("2022-01-01") // date no sé si es correcto	
        },

    ]);

    await db.insert(RankingLibros).values([
        {
            id: 1,
            idLibro: 1,
            idUsuario: "1234",
            estrellas: 5
        },
        {
            id: 2,
            idLibro: 2,
            idUsuario: "1234",
            estrellas: 2
        },
        {
            id: 3,
            idLibro: 3,
            idUsuario: "1234",
            estrellas: 3
        },
        {
            id: 4,
            idLibro: 4,
            idUsuario: "1234",
            estrellas: 2
        },
        {
            id: 5,
            idLibro: 5,
            idUsuario: "1234",
            estrellas: 1
        },
        {
            id: 6,
            idLibro: 6,
            idUsuario: "1234",
            estrellas: 2
        },
        {
            id: 7,
            idLibro: 7,
            idUsuario: "1234",
            estrellas: 3
        },
        {
            id: 8,
            idLibro: 8,
            idUsuario: "2",
            estrellas: 5
        },
        {
            id: 9,
            idLibro: 16,
            idUsuario: "3",
            estrellas: 5
        },
        {
            id: 10,
            idLibro: 50,
            idUsuario: "3",
            estrellas: 3
        },
        {
            id: 11,
            idLibro: 8,
            idUsuario: "3",
            estrellas: 5
        },
        {
            id: 12,
            idLibro: 23,
            idUsuario: "4",
            estrellas: 3
        },
        {
            id: 13,
            idLibro: 18,
            idUsuario: "4",
            estrellas: 1
        },
        {
            id: 14,
            idLibro: 84,
            idUsuario: "5",
            estrellas: 5
        },
        {
            id: 15,
            idLibro: 62,
            idUsuario: "5",
            estrellas: 5
        },
        {
            id: 16,
            idLibro: 6,
            idUsuario: "6",
            estrellas: 2
        },
        {
            id: 17,
            idLibro: 47,
            idUsuario: "7",
            estrellas: 3
        },
        {
            id: 18,
            idLibro: 68,
            idUsuario: "7",
            estrellas: 5
        },
        {
            id: 19,
            idLibro: 46,
            idUsuario: "8",
            estrellas: 4
        },
        {
            id: 20,
            idLibro: 94,
            idUsuario: "8",
            estrellas: 5
        },
    ]);
    
    await db.insert(ListaSeguimiento).values([
        {
            id: 1,
            idLibro: 1,
            idUsuario: "1234"
        },
        {
            id: 2,
            idLibro: 2,
            idUsuario: "1234"
        },
        {
            id: 3,
            idLibro: 3,
            idUsuario: "1234"
        },
        {
            id: 4,
            idLibro: 4,
            idUsuario: "1234"
        },
        {
            id: 5,
            idLibro: 5,
            idUsuario: "1234"
        }, 
        {
            id: 6,
            idLibro: 6,
            idUsuario: "1234"
        }, 
        {
            id: 7,
            idLibro: 7,
            idUsuario: "1234"
        }, 
        {
            id: 8,
            idLibro: 8,
            idUsuario: "1234"
        }, 
        {
            id: 9,
            idLibro: 9,
            idUsuario: "1234"
        }, 
        {
            id: 10,
            idLibro: 10,
            idUsuario: "1234"
        }, 
        {
            id: 11,
            idLibro: 2,
            idUsuario: "1234"
        }
    ]);
    await db.insert(ListaTerminados).values([
        {
            id: 1,
            idLibro: 1,
            idUsuario: "1234",
            fechaTerminado: new Date("2022-01-01")
        },
        {
            id: 2,
            idLibro: 2,
            idUsuario: "1234",
            fechaTerminado: new Date("2023-02-11")
        },        {
            id: 3,
            idLibro: 3,
            idUsuario: "1234",
            fechaTerminado: new Date("2022-05-21")
        },
        {
            id: 4,
            idLibro: 5,
            idUsuario: "1234",
            fechaTerminado: new Date("2019-06-15")
        },        {
            id: 5,
            idLibro: 5,
            idUsuario: "1234",
            fechaTerminado: new Date("2023-08-25")
        },
        {
            id: 6,
            idLibro: 6,
            idUsuario: "2",
            fechaTerminado: new Date("2022-03-01")
        },  
        {
            id: 7,
            idLibro: 1,
            idUsuario: "2",
            fechaTerminado: new Date("2022-01-01")
        },
        {
            id: 8,
            idLibro: 2,
            idUsuario: "2",
            fechaTerminado: new Date("2023-02-11")
        },        
        {
            id: 9,
            idLibro: 3,
            idUsuario: "2",
            fechaTerminado: new Date("2022-05-21")
        },
        {
            id: 10,
            idLibro: 5,
            idUsuario: "2",
            fechaTerminado: new Date("2019-06-15")
        },        
        {
            id: 11,
            idLibro: 7,
            idUsuario: "2",
            fechaTerminado: new Date("2023-08-25")
        },
        {
            id: 12,
            idLibro: 6,
            idUsuario: "2",
            fechaTerminado: new Date("2022-03-01")
        },
        {
            id: 13,
            idLibro: 1,
            idUsuario: "3",
            fechaTerminado: new Date("2022-01-01")
        },
        {
            id: 14,
            idLibro: 2,
            idUsuario: "3",
            fechaTerminado: new Date("2023-02-11")
        },        
        {
            id: 15,
            idLibro: 3,
            idUsuario: "3",
            fechaTerminado: new Date("2022-05-21")
        },
        {
            id: 16,
            idLibro: 5,
            idUsuario: "3",
            fechaTerminado: new Date("2019-06-15")
        },        
        {
            id: 17,
            idLibro: 7,
            idUsuario: "3",
            fechaTerminado: new Date("2023-08-25")
        },
        {
            id: 18,
            idLibro: 6,
            idUsuario: "3",
            fechaTerminado: new Date("2022-03-01")
        },
        {
            id: 19,
            idLibro: 3,
            idUsuario: "4",
            fechaTerminado: new Date("2022-05-21")
        },
        {
            id: 20,
            idLibro: 5,
            idUsuario: "4",
            fechaTerminado: new Date("2019-06-15")
        },        
        {
            id: 21,
            idLibro: 7,
            idUsuario: "4",
            fechaTerminado: new Date("2023-08-25")
        },
        {
            id: 22,
            idLibro: 6,
            idUsuario: "4",
            fechaTerminado: new Date("2022-03-01")
        },
        {
            id: 23,
            idLibro: 10,
            idUsuario: "5",
            fechaTerminado: new Date("2023-08-25")
        },
        {
            id: 24,
            idLibro: 8,
            idUsuario: "5",
            fechaTerminado: new Date("2022-03-01")
        },
        {
            id: 25,
            idLibro: 15,
            idUsuario: "6",
            fechaTerminado: new Date("2022-03-01")
        },
        {
            id: 26,
            idLibro: 18,
            idUsuario: "7",
            fechaTerminado: new Date("2022-03-01")
        },
        {
            id: 27,
            idLibro: 19,
            idUsuario: "7",
            fechaTerminado: new Date("2022-03-01")
        },
        {
            id: 28,
            idLibro: 11,
            idUsuario: "7",
            fechaTerminado: new Date("2022-03-01")
        },
        {
            id: 29,
            idLibro: 21,
            idUsuario: "7",
            fechaTerminado: new Date("2022-03-01")
        },
        {
            id: 30,
            idLibro: 19,
            idUsuario: "8",
            fechaTerminado: new Date("2022-03-01")
        },
        {
            id: 31,
            idLibro: 11,
            idUsuario: "8",
            fechaTerminado: new Date("2022-03-01")
        },
        {
            id: 32,
            idLibro: 50,
            idUsuario: "8",
            fechaTerminado: new Date("2022-03-01")
        }
    ]);
      
}
