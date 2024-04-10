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
            tituloLibro: "El campamento",
            nombreAutor: "Blue Jeans",
            portadaLibro: "img",
            sinopsisLibro: "lorem ipsum",
            nPaginasLibro: 100,
            categoriaLibro: "Suspense",
            fechaPubLibro: new Date("2020-11-12") // date no sé si es correcto	
        }
    ]);
}
