document.addEventListener("DOMContentLoaded",function(){
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('body').insertAdjacentHTML('beforebegin',html);
        })
        .catch(error => {
            console.error('Error al cargar el header: ', error)
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('body').insertAdjacentHTML('beforeend', html);
        })
        .catch(error => {
            console.error('Error al cargar el footer:', error);
        });
});

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
        boton.style.backgroundColor = '#ffc000';
    });
    // Cambiar el color de fondo del botón seleccionado
    var botonSeleccionado = document.querySelector('button[data-clase="' + clase + '"]');
    if (botonSeleccionado) {
        botonSeleccionado.style.backgroundColor = '#ff8c00';
    }
    document.getElementById('clase').value = clase;
}

