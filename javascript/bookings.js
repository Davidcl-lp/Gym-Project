window.onload = function() {
    // Obtener el parámetro "clase" de la URL
    var urlParams = new URLSearchParams(window.location.search);
    var clase = urlParams.get('clase');
    if (clase) {
        // Seleccionar automáticamente el botón correspondiente
        var botonClase = document.querySelector('button[data-clase="' + clase + '"]');
        if (botonClase) {
            reservarClase(clase); // Llamar a la función para resaltar el botón
        }
    }
}

function reservarClase(clase) {
    // Restablecer el color de fondo de todos los botones
    var botones = document.querySelectorAll('button');
    botones.forEach(function(boton) {
        boton.style.backgroundColor = '#f9f9f9';
    });
    // Cambiar el color de fondo del botón seleccionado
    var botonSeleccionado = document.querySelector('button[data-clase="' + clase + '"]');
    if (botonSeleccionado) {
        botonSeleccionado.style.backgroundColor = '#ffc000';
    }
    document.getElementById('clase').value = clase;
}