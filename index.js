// Selecciona la imagen que quieres animar
let elementosPortada = document.querySelectorAll('.portada');
let bloque2 = document.querySelectorAll('.bloque2-icon-animation');
let bloque3 = document.querySelectorAll('.bloque3-icon-animation')
let contactoItems = document.querySelectorAll('.card-contacto-elem-animation');



function crearIntersectionObserver(clases) {
    return new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                clases.forEach(c => entry.target.classList.add(c));
                observer.unobserve(entry.target);
            }
            /*
            //Arreglar todo esto
            //Funciona para todo el resto
            if (entry.isIntersecting && !entry.target.classList.contains("portada")
            && !entry.target.classList.contains("card-contacto-elem-animation")
            && !entry.target.classList.contains("bloque2_img-img")) {
                clases.forEach(c => entry.target.classList.add(c));
                observer.unobserve(entry.target);
            }
            //Solo funciona para Img de comentarios
            if(entry.isIntersecting && entry.target.classList.contains("bloque2_img-img")){
                clases.forEach(c => entry.target.classList.add('acordeon-izq-der'));
                observer.unobserve(entry.target);
            }

            //Solo funciona para Icon de contactos
            if(entry.isIntersecting && clases[0]==='animate__animated' && entry.target.classList.contains("card-contacto-elem-animation")){
                clases.forEach(c => entry.target.classList.add(c));
                observer.unobserve(entry.target);
            }

            //Solo funciona para animacion de portada
            if(entry.isIntersecting && clases[0]==='custom-pulse' && entry.target.classList.contains("portada") 
            && !entry.target.classList.contains("portada-logo")){
                clases.forEach(c => entry.target.classList.add(c));
                observer.unobserve(entry.target);
            }
            */
        });
    }, { threshold: 0 });
}

const observerPortadaAnimation = crearIntersectionObserver(['custom-pulse']);
const observerAcordeonAbArAnimation = crearIntersectionObserver(['acordeon-abajo-arriba']);
const observerAcordeonIzDerAnimation = crearIntersectionObserver(['acordeon-izq-der']);
const observerContactoAnimation = crearIntersectionObserver(['animate__animated','animate__heartBeat']);

bloque2.forEach(i => observerAcordeonIzDerAnimation.observe(i));
bloque3.forEach(i => observerAcordeonAbArAnimation.observe(i));
contactoItems.forEach(i => observerContactoAnimation.observe(i));
elementosPortada.forEach(i => observerPortadaAnimation.observe(i));

console.log('This site was disigned by 💩https://github.com/leonelSubelza💩 and 🤓https://github.com/GiovanniSia🤓')