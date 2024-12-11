function cambiarDom(){
    const titulo1 = document.getElementById('titulo1');
    const titulo2 = document.getElementById('titulo2');
    const parrafo1 = document.getElementById('parrafo1');
    const parrafo2 = document.getElementById('parrafo2');
    console.log(parrafo1)

    titulo1.textContent = "Criptos";
    parrafo1.innerHTML = "Criptos son monedas de intercambio de transferencia bancaria ";
    titulo2.textContent = "Koins";
    parrafo2.innerHTML = "las koins de intercambion sirven de ayuda para muchas persinas ";
}

function otrafuncion() {
    const contenedor1 = document.getElementById("contenedor1");
    contenedor1.innerHTML = "<h1 id ='Este titulo'> Tu nuevoo </h1> <p> parrafoisssa </p>";
    const contenedor2 = document.getElementById("contenedor2");
    contenedor2.innerHTML = "<h1 id='titulo3'>titulo de innerhtml </h1> <p> parrafo 3 </p> " ;
}

function tercerafuncion() {
    const parrafo1 = document.querySelector('holaa');
    parrafo1.innerHTML = 'parrfos editables';
}

const contenedor = document.getElementById ("contenedor")
function ocultar(){
    contenedor.classList.toggle("oculto");
}

function cambiar(){
    contenedor.classList.toggle("secundaria");
    contenedor.style.marginLeft = "400px"
}

function mover(){
    contenedor.style.marginLeft = "400px"
    contenedor.style.blackgroundcolor = "red"
}

