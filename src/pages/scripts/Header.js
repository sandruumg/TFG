// header.js

// Define una función para buscar libros por título
async function buscarLibro(titulo) {
    try {
      const response = await fetch(`/buscar-libro?titulo=${titulo}`);
      const data = await response.json();
      // Maneja los datos de los libros encontrados y muestra los resultados en la interfaz de usuario
      console.log(data); // Ejemplo de cómo manejar los datos de los libros
    } catch (error) {
      console.error('Error al buscar libros:', error);
    }
  }
  
  // Maneja el envío del formulario de búsqueda
  document.getElementById('form-busqueda').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita que se envíe el formulario de manera convencional
  
    const inputTitulo = document.getElementById('input-titulo');
    const titulo = inputTitulo.value.trim();
  
    if (titulo) {
      await buscarLibro(titulo); // Realiza la búsqueda del libro
    } else {
      console.log('El campo de búsqueda está vacío');
    }
  });
  

//   otra opción
import { db, Libros } from 'astro:db';

export async function buscarLibroPorTitulo(titulo) {
    const resultados = await db.select(Libros).where('tituloLibro').contains(titulo).all();
    return resultados;
}
