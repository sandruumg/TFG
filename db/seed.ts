import { db, Usuarios } from 'astro:db';

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
	])
}
