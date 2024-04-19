document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    
    const formData = new FormData(this);
  
    try {
        const response = await fetch('/api/signin', {
            method: 'POST',
            body: formData
        });
    
        if (!response.ok) {
            throw new Error('Error al enviar el formulario');
        }
    
        const login = await response.json();
        
      // Actualiza el DOM para mostrar los datos recibidos
        const usuarioConectado = document.getElementById('btn-login');
        usuarioConectado.innerHTML = '';
        usuarioConectado.innerHTML='Hola, ' +login+'!';
    
    
    
    } catch (error) {
        console.error('Error en la solicitud AJAX:', error);
    }

});