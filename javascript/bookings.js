document.addEventListener("DOMContentLoaded",function(){
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('body').insertAdjacentHTML('beforebegin',html);
        })
        .catch(error => {
            console.error('Error al cargar el header: ', error)
        });

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
    var urlParams = new URLSearchParams(window.location.search);
    var clase = urlParams.get('clase');
    if (clase) {

        var botonClase = document.querySelector('button[data-clase="' + clase + '"]');
        if (botonClase) {
            reservarClase(clase);
        }
    }
}

function reservarClase(clase) {

    var botones = document.querySelectorAll('button');
    botones.forEach(function(boton) {
        boton.style.backgroundColor = '#ff8c00';
    });

    var botonSeleccionado = document.querySelector('button[data-clase="' + clase + '"]');
    if (botonSeleccionado) {
        botonSeleccionado.style.backgroundColor = '#ff4500';
    }
    document.getElementById('clase').value = clase;
}

window.onload = function() {
    var iframe = document.getElementById("timetableFrame");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "timetable.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = xhr.responseText;

            var startIndex = response.indexOf("<body>");
            var endIndex = response.indexOf("</body>");
            var contentWithoutHeader = response.substring(startIndex, endIndex);
            iframe.contentWindow.document.open();

            iframe.contentWindow.document.write(contentWithoutHeader);

            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = '../css/timetable.css';
            iframe.contentWindow.document.head.appendChild(link);
            iframe.contentWindow.document.close();
        }
    };
    xhr.send();
};