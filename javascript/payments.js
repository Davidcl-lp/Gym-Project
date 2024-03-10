document.addEventListener("DOMContentLoaded", function() {
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

    fetch('myhomemenu.html')
    .then(response => response.text())
    .then(html => {
      document.querySelector('main').insertAdjacentHTML('afterbegin', html);
    })
    .catch(error => {
      console.error('Error al cargar el menu del home:', error);
    });
  });
