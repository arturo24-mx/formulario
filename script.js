document.querySelector('form').addEventListener('submit', function(event) {
    // Capturamos el correo ingresado por el usuario
    var correoUsuario = document.getElementById('correo').value;
    
    // Asignamos el correo del usuario al campo oculto _cc
    document.querySelector('input[name="_cc"]').value = correoUsuario;
});