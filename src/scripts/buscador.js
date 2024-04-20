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
      const busquedaUsuario = document.getElementById('busquedaUsuario');
      const buscador = document.getElementById('buscador').value;
      main.innerHTML = ''; // Borra cualquier contenido existente en el contenedor
      bookInfoContainer.innerHTML='';
      busquedaUsuario.innerHTML= `"${buscador}"`;

      main.appendChild(busquedaUsuario);
      // Itera sobre los datos recibidos y crea elementos HTML para mostrar la información
      data.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('card');
        bookElement.style.width = '20vw';
        bookElement.style.height = '50vh';
        const libroString = new URLSearchParams(book).toString();
        bookElement.innerHTML = `
        <a href="InfoLibro?libro=${libroString}" class="text-center flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="flex-shrink-0 my-5 w-20 md:w-30">
                <img class="object-cover w-full h-40 md:h-auto md:w-full md:rounded-none md:rounded-l-lg" src="${book.portadaLibro}" alt="">
            </div>
            <div style="height:18vh" class="flex flex-col justify-between p-4 leading-normal flex-grow">
                <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">${book.tituloLibro}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${book.nombreAutor}</p>
            </div>
        </a>`;
    
        bookInfoContainer.appendChild(bookElement);
      });
      main.appendChild(bookInfoContainer);
    } catch (error) {
      console.error('Error en la solicitud AJAX:', error);
    }

});