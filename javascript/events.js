document.addEventListener("DOMContentLoaded", function() {
  function createEvent(eventTitle, eventText, eventImgSource, order) {
      const article = document.createElement('article');
      article.classList.add("event__article");

      const description = document.createElement('div');
      description.classList.add("description");

      const title = document.createElement('h2');
      title.classList.add("event__title");
      title.innerHTML = eventTitle;

      const text = document.createElement('p');
      text.classList.add("event__text");
      text.innerHTML = eventText;

      const img = document.createElement('img');
      img.classList.add("event__image");
      img.src = eventImgSource;
      img.alt = eventTitle;

      if (order){
        article.appendChild(description);
        article.appendChild(img);
      }
      else{
        article.appendChild(img);
        article.appendChild(description);
      }
      description.appendChild(title);
      description.appendChild(text);

      return article;
  }

  const main = document.querySelector('main');
  const section = document.createElement('section');
  section.classList.add('eventSection');
  main.appendChild(section); // Asegura que todos los eventos estén dentro de una sección

  var events = {
    event1: {
      eventTitle: "Reto saludable 360",
      eventText: "El Reto Saludable 360 es un evento dinámico de un mes de" +
      "duración diseñado para fomentar un estilo de vida saludable entre los participantes," +
      "centrándose en la nutrición, el ejercicio físico, la salud mental y el bienestar general." +
      "Organizado por el Centro de Bienestar Comunitario, " +
      "este evento único ofrece a los participantes una experiencia integral para" +
      "revitalizar tanto el cuerpo como la mente.",
      eventImgSource: '/img/img1.jpeg'
    },
    event2: {
      eventTitle: "Reto saludable 360",
      eventText: "El Reto Saludable 360 es un evento dinámico de un mes de" +
      "duración diseñado para fomentar un estilo de vida saludable entre los participantes," +
      "centrándose en la nutrición, el ejercicio físico, la salud mental y el bienestar general." +
      "Organizado por el Centro de Bienestar Comunitario, " +
      "este evento único ofrece a los participantes una experiencia integral para" +
      "revitalizar tanto el cuerpo como la mente.",
      eventImgSource: '/img/img1.jpeg'
    },
    
    events3: {
      eventTitle:  "Reto saludable 360",
      eventText: "El Reto Saludable 360 es un evento dinámico de un mes de" +
      "duración diseñado para fomentar un estilo de vida saludable entre los participantes," +
      "centrándose en la nutrición, el ejercicio físico, la salud mental y el bienestar general." +
      "Organizado por el Centro de Bienestar Comunitario, " +
      "este evento único ofrece a los participantes una experiencia integral para" +
      "revitalizar tanto el cuerpo como la mente.",
      eventImgSource: '/img/img1.jpeg'
    }
  };
  var order = true;
  for (var key in events) {
      var event = events[key];
      const eventElement = createEvent(event.eventTitle, event.eventText, event.eventImgSource, order);
      if (order){
        order = false
      }
      else{
        order = true;
      }
      section.appendChild(eventElement);
  }
  fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    document.querySelector('body').insertAdjacentHTML('beforeend', html);
  })
  .catch(error => {
    console.error('Error al cargar el footer:', error);
  });
});
