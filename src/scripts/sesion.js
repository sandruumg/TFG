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

function isValid() {
    //Inicializamos los elementos de Registro   
    const alias = document.getElementById('aliasUsuarioR');
    const nombre = document.getElementById('nombreUsuarioR');
    const invalidName = document.getElementById('invalidName');
    const apellido1 = document.getElementById('apellidoUsuarioR');
    const invalidApellido = document.getElementById('invalidApellido');
    const genderH = document.getElementById('generoUsuarioHR');
    const genderM = document.getElementById('generoUsuarioMR');
    const email = document.getElementById('correoUsuarioR');
    const invalidCorreo = document.getElementById('invalidCorreo');
    const pass = document.getElementById('passwordR');
    const invalidPass = document.getElementById('invalidPass');

    //Expresiones regulares para validar los valores
    let expEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let expLetras = /^[A-Za-zñÑ]{3,}$/;
    let expAlias = /^[A-Za-z0-9]{3,}$/;
    let expPass = /.{9,}/;

    let valid = true;
    
    alias.addEventListener('input', ()=>{
        if(!expAlias.test(alias.value)){
            invalidAlias.innerHTML = 'El campo debe tener mas de 3 caracteres';
            invalidAlias.style.display = 'block';
            invalidAlias.style.marginTop = 0;
            invalidAlias.style.fontSize = '10px';
            invalidAlias.style.color = 'red';
            alias.style.border = '1px solid red';
            valid = false;
        }else{
            invalidAlias.style.display = 'none';
            alias.style.border = 'none';
            alias.style.borderBottom = '2px solid rgb(229 231 235)';
            valid = true;
        }
        
    });
    nombre.addEventListener('input', ()=>{
        if(!expLetras.test(nombre.value)){
            invalidName.innerHTML = 'El campo debe tener mas de 3 caracteres no numericos';
            invalidName.style.display = 'block';
            invalidName.style.marginTop = 0;
            invalidName.style.fontSize = '10px';
            invalidName.style.color = 'red';
            nombre.style.border = '1px solid red';
            valid = false;
        }else{
            invalidName.style.display = 'none';
            nombre.style.border = 'none';
            nombre.style.borderBottom = '2px solid rgb(229 231 235)';
            valid = true;
        }
        
    });
    apellido1.addEventListener('input', ()=>{
        if(!expLetras.test(apellido1.value)){
            invalidApellido.innerHTML = 'El campo debe tener mas de 3 caracteres no numericos';
            invalidApellido.style.display = 'block';
            invalidApellido.style.marginTop = 0;
            invalidApellido.style.fontSize = '10px';
            invalidApellido.style.color = 'red';
            apellido1.style.border = '1px solid red';
            valid = false;
        }else{
            invalidApellido.style.display = 'none';
            apellido1.style.border = '2px solid rgb(229 231 235)';
            valid = true;
        }
        
    });
    email.addEventListener('input', ()=>{
        if(!expEmail.test(email.value)){
            invalidCorreo.innerHTML = 'El correo no es válido';
            invalidCorreo.style.display = 'block';
            invalidCorreo.style.marginTop = 0;
            invalidCorreo.style.fontSize = '10px';
            invalidCorreo.style.color = 'red';
            email.style.border = '1px solid red';
            valid = false;
        }else{
            invalidCorreo.style.display = 'none';
            email.style.border = '2px solid rgb(229 231 235)';
            valid = true;
        }
        
    });
    pass.addEventListener('input', ()=>{
        if(!expPass.test(pass.value)){
            invalidPass.innerHTML = 'La contraseña debe contener al menos 9 caracteres';
            invalidPass.style.display = 'block';
            invalidPass.style.marginTop = 0;
            invalidPass.style.fontSize = '10px';
            invalidPass.style.color = 'red';
            pass.style.border = '1px solid red';
            valid = false;
        }else{
            invalidPass.style.display = 'none';
            pass.style.border = '2px solid rgb(229 231 235)';
            valid = true;
        }
        
    });
    

    return valid;
}
let valid = isValid();
//hacer comprobaciones registro
document.getElementById('register-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    const formData = new FormData(this);
    try {
        if(valid){
            const response = await fetch('/api/signup', {
                method: 'POST',
                body: formData
            });
        
            if (response.status == 400) {
                const mensajeError = await response.json();
                const divAlertError = document.getElementById('alertErrorRegistroSesion');
                alertErrorRegistroSesion.style.display = 'flex';
                const mensajeErrorInicioSesion = document.getElementById('mensajeErrorRegistroSesion');
                mensajeErrorInicioSesion.innerText = mensajeError;
            }
        
            const login = await response.json();
            // Actualiza el DOM para mostrar los datos recibidos
            window.location.reload();
         }else{
             //mensaje error
         }
    
    } catch (error) {
        console.error('Error en la solicitud AJAX:', error);
    }

});

function updateLogoForDarkMode() {
    const logo = document.getElementById('logo');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Cambiar a la imagen del logo para modo oscuro
        logo.src = '/imagenes/logo.png';
    } else {
        // Cambiar a la imagen del logo para modo claro
        logo.src = '/imagenes/logo-2.png';
    }
}

// Ejecutar la función al cargar la página
updateLogoForDarkMode();

// Añadir un event listener para detectar cambios en el esquema de color
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    updateLogoForDarkMode();
});