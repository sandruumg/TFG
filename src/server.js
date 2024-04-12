// server.js

// Importa las tablas y funciones necesarias desde Astro DB
import { db, Libros } from 'astro:db';

// Define una función para buscar libros por título
export async function buscarLibroPorTitulo(titulo) {
    // Utiliza la función de consulta de Astro DB para buscar libros por título
    const resultados = await db.select(Libros).where('tituloLibro').contains(titulo).all();

    // Devuelve los resultados de la búsqueda
    return resultados;
}

// Importa Express
import express from 'express';
const app = express();

// Define un endpoint para la búsqueda de libros
app.get('/buscar-libro', async (req, res) => {
    const titulo = req.query.titulo; // Obtén el título del libro desde la solicitud

    try {
        // Realiza la búsqueda de libros por título utilizando la función definida anteriormente
        const resultados = await buscarLibroPorTitulo(titulo);

        // Devuelve los resultados de la búsqueda como respuesta JSON
        res.json(resultados);
    } catch (error) {
        // Maneja el error si ocurre algún problema durante la búsqueda
        console.error('Error al buscar libros:', error);
        res.status(500).json({ error: 'Error al buscar libros' });
    }
});

// Inicia el servidor en el puerto especificado
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});


// otra opción
import express from 'express';
import { buscarLibroPorTitulo } from './buscarLibro'; // Importa la función de búsqueda de libros

// const app = express();

app.get('/buscar-libro', async (req, res) => {
    const titulo = req.query.titulo;
    const resultados = await buscarLibroPorTitulo(titulo);
    res.json(resultados);
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
