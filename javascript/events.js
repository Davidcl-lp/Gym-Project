document.addEventListener("DOMContentLoaded", function() {
    function create_events (eventText, eventImg, label) {
        
    }
    function create_events (eventText, eventImgSource, label){
         const p = document.createElement('p');
         const img = document.createElement('img');
         img.src = eventImgSource;
         p.innerHTML = eventText;
         p.classList.add("eventText", "gridElement");
         img.classList.add("eventImg", "gridElement");
         label.appendChild(p);
         label.appendChild(img);
       }    
    const main = document.querySelector('main');
    var events = {
      event1: {
        eventText: "El Reto Saludable 360 es un evento dinámico de un mes de" +
        "duración diseñado para fomentar un estilo de vida saludable entre los participantes," +
        "centrándose en la nutrición, el ejercicio físico, la salud mental y el bienestar general." +
        "Organizado por el Centro de Bienestar Comunitario, " +
        "este evento único ofrece a los participantes una experiencia integral para" +
        "revitalizar tanto el cuerpo como la mente.",
        eventImgSource: '/img/img1.jpeg'
      },
      event2: {
        eventText: "El Reto Saludable 360 es un evento dinámico de un mes de" +
        "duración diseñado para fomentar un estilo de vida saludable entre los participantes," +
        "centrándose en la nutrición, el ejercicio físico, la salud mental y el bienestar general." +
        "Organizado por el Centro de Bienestar Comunitario, " +
        "este evento único ofrece a los participantes una experiencia integral para" +
        "revitalizar tanto el cuerpo como la mente.",
        eventImgSource: '/img/img1.jpeg'
      },
      events3: {
        eventText: "El Reto Saludable 360 es un evento dinámico de un mes de" +
        "duración diseñado para fomentar un estilo de vida saludable entre los participantes," +
        "centrándose en la nutrición, el ejercicio físico, la salud mental y el bienestar general." +
        "Organizado por el Centro de Bienestar Comunitario, " +
        "este evento único ofrece a los participantes una experiencia integral para" +
        "revitalizar tanto el cuerpo como la mente.",
        eventImgSource: '/img/img1.jpeg'
      }
    };
    for (var key in events) {
      var event = events[key];
      create_events (event.eventText, event.eventImgSource, main);

    }
});