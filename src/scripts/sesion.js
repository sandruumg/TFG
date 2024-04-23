//para el boton de sign in del menu
document.getElementById("btn-login").addEventListener("click", function () {
    document.getElementById("modal").style.display = "block";    
});
document.getElementById("close-modal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";    
});

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
            throw new Error('Error al enviar el formulario');
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
    document.getElementById("inicioBtn").style.color = "#00d7c0";
    document.getElementById("registroBtn").style.color = "#1f2937";
});

document.getElementById("registroBtn").addEventListener("click", function () {
    document.getElementById("formulario-register").style.display = "block"; // Ocultar el formulario de registro
    document.getElementById("formulario-login").style.display = "none";
    document.getElementById("registroBtn").style.color = "#00d7c0";
    document.getElementById("inicioBtn").style.color = "#1f2937";
    
});
