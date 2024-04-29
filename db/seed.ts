import { db, User, Libros } from 'astro:db';

export default async function seed() {
    await db.insert(User).values([
        {
            id: '1234',
            aliasUsuario: "Prueba1",
            nombreUsuario: "Prueba",
            apellidoUsuario: "Prueba",
            correoUsuario: "prueba@prueba.com",
            password: "1234"
        },
        {
            id: '1',
            aliasUsuario: "Prueba2",
            nombreUsuario: "Prueba2",
            apellidoUsuario: "Prueb2",
            correoUsuario: "prueba2@prueba.com",
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
    ]);
}
