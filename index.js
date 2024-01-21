// Selecciona la imagen que quieres animar
let elementosPortada = document.querySelectorAll(".portada");
let bloque2 = document.querySelectorAll(".bloque2-icon-animation");
let bloque3 = document.querySelectorAll(".bloque3-icon-animation");
let contactoItems = document.querySelectorAll(".card-contacto-elem-animation");

function crearIntersectionObserver(clases) {
  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          clases.forEach((c) => entry.target.classList.add(c));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0 }
  );
}

const observerPortadaAnimation = crearIntersectionObserver(["custom-pulse"]);
const observerAcordeonAbArAnimation = crearIntersectionObserver([
  "acordeon-abajo-arriba",
]);
const observerAcordeonIzDerAnimation = crearIntersectionObserver([
  "acordeon-izq-der",
]);
const observerContactoAnimation = crearIntersectionObserver([
  "animate__animated",
  "animate__heartBeat",
]);

bloque2.forEach((i) => observerAcordeonIzDerAnimation.observe(i));
bloque3.forEach((i) => observerAcordeonAbArAnimation.observe(i));
contactoItems.forEach((i) => observerContactoAnimation.observe(i));
elementosPortada.forEach((i) => observerPortadaAnimation.observe(i));
