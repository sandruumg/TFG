import { db, Usuarios } from 'astro:db';

export default async function seed() {
	db.insert(Usuarios).values([
		{
			idUsuario: 1234,
			aliasUsuario: "Prueba1",
			nombreUsuario: "Prueba",    
			apellidoUsuario: "Prueba",
			correoUsuario: "prueba@prueba.com",
			contraseñaUsuario: "1234"
		}
	])
}
