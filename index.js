// Selecciona la imagen que quieres animar
let imgs = document.querySelectorAll('img');
let titulos = document.querySelectorAll('h1');
let parrafos = document.querySelectorAll('p');

// Crea una instancia de Intersection Observer con una función de devolución de llamada
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting  && !entry.target.classList.contains("portada")) {
            entry.target.classList.add('acordeon-abajo-arriba');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0 }); // El umbral define qué porcentaje del elemento debe ser visible para considerarlo "intersecting"

let observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains("portada")) {
            entry.target.classList.add('acordeon-izq-der');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0 });

imgs.forEach(i => observer.observe(i))
titulos.forEach(i => observer2.observe(i))
parrafos.forEach(i => observer2.observe(i))