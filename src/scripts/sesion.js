//para recuperar los datos de la api
document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    
    const formData = new FormData(this);
  
    try {
        const response = await fetch('/api/signin', {
            method: 'POST',
            body: formData
        });
    
        if (!response.ok) {
            const mensajeError = await response.json();
            const divAlertError = document.getElementById('alertErrorInicioSesion');
            divAlertError.style.display = 'flex';
            const mensajeErrorInicioSesion = document.getElementById('mensajeErrorInicioSesion');
            mensajeErrorInicioSesion.innerText = mensajeError;
            // throw new Error('Error al enviar el formulario');
        }
    
        const login = await response.json();
        
      // Actualiza el DOM para mostrar los datos recibidos
      window.location.reload();

    
    
    
    } catch (error) {
        console.error('Error en la solicitud AJAX:', error);
    }

});

document.getElementById("inicioBtn").addEventListener("click", function () {
    console.log('Clickado');
    document.getElementById("formulario-login").style.display = "block"; // Ocultar el formulario de inicio de sesión
    document.getElementById("formulario-register").style.display = "none";
    document.getElementById("inicioBtn").style.color = "var(--secondary-dark)";
    document.getElementById("registroBtn").style.color = "#1f2937";
});

document.getElementById("registroBtn").addEventListener("click", function () {
    document.getElementById("formulario-register").style.display = "block"; // Ocultar el formulario de registro
    document.getElementById("formulario-login").style.display = "none";
    document.getElementById("registroBtn").style.color = "var(--secondary-dark)";
    document.getElementById("inicioBtn").style.color = "#1f2937";
    
});

//hacer comprobaciones registro