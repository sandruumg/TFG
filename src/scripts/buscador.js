// Realiza una solicitud AJAX para enviar el formulario y obtener los datos
document.getElementById('formularioBusqueda').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    const buscador = document.getElementById('buscador').value;
    window.location.href = "busquedaLibros?buscador=" + encodeURIComponent(buscador);
});