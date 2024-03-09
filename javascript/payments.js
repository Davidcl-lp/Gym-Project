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
