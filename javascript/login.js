
document.addEventListener('DOMContentLoaded', function() {
const fly = document.getElementById('fly');
let currentPosition = { x: 100, y: 100 }; // Posición inicial arbitraria
let destination = { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight };
const speed = 5; // Velocidad de movimiento

const moveFly = () => {
    // Calcular la dirección hacia el destino
    const direction = { x: destination.x - currentPosition.x, y: destination.y - currentPosition.y };
    const length = Math.sqrt(direction.x ** 2 + direction.y ** 2);
  
    // Normalizar la dirección
    const normalizedDirection = { x: direction.x / length, y: direction.y / length };
  
    // Mover la mosca hacia el destino
    currentPosition.x += normalizedDirection.x * speed;
    currentPosition.y += normalizedDirection.y * speed;
  
    // Aplicar la nueva posición
    fly.style.left = `${currentPosition.x}px`;
    fly.style.top = `${currentPosition.y}px`;
  
    // Comprobar si la mosca ha alcanzado (o está muy cerca de) el destino
    if (Math.abs(direction.x) < 1 && Math.abs(direction.y) < 1) {
      // Establecer un nuevo destino aleatorio
      destination = { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight };
    }
  
    requestAnimationFrame(moveFly);
  };
  moveFly();

  

});