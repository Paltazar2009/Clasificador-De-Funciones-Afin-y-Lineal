// seleccionamos los elementos que vamos a utilizar

const valorB = document.querySelector("#valorB");
const valorC = document.querySelector("#valorC");
const btnGenerar = document.querySelector("#btnGenerar");
const funcion = document.querySelector("#funcion");

const resultadoLineal = document.querySelector("#resultadoLineal");
const resultadoAfin = document.querySelector("#resultadoAfin");

const listaLineal = document.querySelector("#listaLineal");
const listaAfin = document.querySelector("#listaAfin");


// cuando presionamos el botón se generan nuevos números

btnGenerar.addEventListener("click", function() {

    // elegimos dos números al azar entre -10 y 10

    let b = Math.floor(Math.random() * 21) - 10;
    let c = Math.floor(Math.random() * 21) - 10;

    // mostramos los números en la página

    valorB.innerText = b;
    valorC.innerText = c;


    // mostramos la función con los valores que salieron

    funcion.innerText = "f(x) = " + b + "x + " + c;


    // primero escondemos las dos listas

    listaLineal.hidden = true;
    listaAfin.hidden = true;


    // revisamos si la función es lineal o afín

    if (c === 0) {

        // si c es cero, la función es lineal

        resultadoLineal.innerText =
            "¡La función es lineal! Como c vale 0, la recta pasa por el origen.";

        resultadoAfin.innerText =
            "Esta vez no corresponde, porque c es igual a 0.";

        listaLineal.hidden = false;

    } else {

        // si c es distinto de cero, la función es afín

        resultadoAfin.innerText =
            "¡La función es afín! Como c es distinto de 0, la recta no pasa por el origen.";

        resultadoLineal.innerText =
            "Esta vez no corresponde, porque c es distinto de 0.";

        listaAfin.hidden = false;

    }

});

