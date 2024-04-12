// Realiza una solicitud AJAX para enviar el formulario y obtener los datos
document.getElementById('formularioBusqueda').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    
    const formData = new FormData(this);
  
    try {
      const response = await fetch('/api/header', {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }
  
      const data = await response.json();
      console.log(data); // Muestra los datos recibidos en la consola para depuración
  
      // Actualiza el DOM para mostrar los datos recibidos
      const bookInfoContainer = document.getElementById('bookInfoContainer');
      const main = document.getElementById('main');
      main.innerHTML = ''; // Borra cualquier contenido existente en el contenedor
  
      // Itera sobre los datos recibidos y crea elementos HTML para mostrar la información
      data.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.innerHTML = `
          <h2>${book.tituloLibro}</h2>
          <p>Autor: ${book.nombreAutor}</p>
          <img src="${book.portadaLibro}" alt="Portada del libro">
          <p>Sinopsis: ${book.sinopsisLibro}</p>
          <p>Categoría: ${book.categoriaLibro}</p>
          <p>Fecha de publicación: ${new Date(book.fechaPubLibro).toLocaleDateString()}</p>
          <!-- Agrega más información según sea necesario -->
        `;
        bookInfoContainer.appendChild(bookElement);
      });
      main.appendChild(bookInfoContainer);
    } catch (error) {
      console.error('Error en la solicitud AJAX:', error);
    }

});