// Selecciona la imagen que quieres animar
let img = document.getElementById('card1-img');
let imgs = document.querySelectorAll('img');

// Crea una instancia de Intersection Observer con una función de devolución de llamada
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Verifica si el elemento es visible en el área de visualización
        if (entry.isIntersecting) {
            // Añade las clases de animación
            entry.target.classList.add('animate__animated');
            entry.target.classList.add('animate__zoomIn');

            // Deja de observar el elemento una vez que se ha activado la animación
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 }); // El umbral define qué porcentaje del elemento debe ser visible para considerarlo "intersecting"

// Empieza a observar la imagen
imgs.forEach(i => observer.observe(i))
