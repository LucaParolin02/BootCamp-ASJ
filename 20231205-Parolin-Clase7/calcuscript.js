let resultado = document.getElementById("=");
let uno = document.getElementById("uno");
let cero = document.getElementById("cero");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let dividir = document.getElementById("dividir");
let sumar = document.getElementById("mas");
let restar = document.getElementById("menos");
let multiplicar = document.getElementById("multiplicar");
let borrar = document.getElementById("Borrar");
let C = document.getElementById("C");
let CE = document.getElementById("CE");
let operacion = null;
let valorAnterior = null;

C.addEventListener("click",function(){
    let frenteCalculadora = document.getElementById("frenteCalculadora");
        frenteCalculadora.innerText = 0;
})

CE.addEventListener("click",function(){
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    frenteCalculadora.innerText = 0;
})
cero.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    if(frenteCalculadora.textContent === "0"){
        frenteCalculadora.innerText = 0;
    } else {
        frenteCalculadora.innerText += 0;
    }
});
uno.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    if(frenteCalculadora.textContent === "0" || frenteCalculadora.textContent === "+" || frenteCalculadora.textContent === "-" || frenteCalculadora.textContent === "*" || frenteCalculadora.textContent === "/"){
        frenteCalculadora.innerText = 1;
    } else {
        frenteCalculadora.innerText += 1;
    }
});
dos.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    if(frenteCalculadora.textContent === "0" || frenteCalculadora.textContent === "+" || frenteCalculadora.textContent === "-" || frenteCalculadora.textContent === "*" || frenteCalculadora.textContent === "/"){
        frenteCalculadora.innerText = 2;
    } else {
        frenteCalculadora.innerText += 2;
    }
});
tres.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    if(frenteCalculadora.textContent === "0" || frenteCalculadora.textContent === "+" || frenteCalculadora.textContent === "-" || frenteCalculadora.textContent === "*" || frenteCalculadora.textContent === "/"){
        frenteCalculadora.innerText = 3;
    } else {
        frenteCalculadora.innerText += 3;
    }
});
cuatro.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    if(frenteCalculadora.textContent === "0" || frenteCalculadora.textContent === "+" || frenteCalculadora.textContent === "-" || frenteCalculadora.textContent === "*" || frenteCalculadora.textContent === "/"){
        frenteCalculadora.innerText = 4;
    } else {
        frenteCalculadora.innerText += 4;
    }
});
cinco.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    if(frenteCalculadora.textContent === "0" || frenteCalculadora.textContent === "+" || frenteCalculadora.textContent === "-" || frenteCalculadora.textContent === "*" || frenteCalculadora.textContent === "/"){
        frenteCalculadora.innerText = 5;
    } else {
        frenteCalculadora.innerText += 5;
    }
});
seis.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    if(frenteCalculadora.textContent === "0" || frenteCalculadora.textContent === "+" || frenteCalculadora.textContent === "-" || frenteCalculadora.textContent === "*" || frenteCalculadora.textContent === "/"){
        frenteCalculadora.innerText = 6;
    } else {
        frenteCalculadora.innerText += 6;
    }
});
siete.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    if(frenteCalculadora.textContent === "0" || frenteCalculadora.textContent === "+" || frenteCalculadora.textContent === "-" || frenteCalculadora.textContent === "*" || frenteCalculadora.textContent === "/"){
        frenteCalculadora.innerText = 7;
    } else {
        frenteCalculadora.innerText += 7;
    }
});
ocho.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    if(frenteCalculadora.textContent === "0" || frenteCalculadora.textContent === "+" || frenteCalculadora.textContent === "-" || frenteCalculadora.textContent === "*" || frenteCalculadora.textContent === "/"){
        frenteCalculadora.innerText = 8;
    } else {
        frenteCalculadora.innerText += 8;
    }
});
nueve.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    if(frenteCalculadora.textContent === "0" || frenteCalculadora.textContent === "+" || frenteCalculadora.textContent === "-" || frenteCalculadora.textContent === "*" || frenteCalculadora.textContent === "/"){
        frenteCalculadora.innerText = 9;
    } else {
        frenteCalculadora.innerText += 9;
    }
});
borrar.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    if(frenteCalculadora.textContent.length == 1){
        frenteCalculadora.innerText = 0;
    } else {
        frenteCalculadora.textContent = frenteCalculadora.textContent.slice(0,-1);
    }
});
sumar.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    valorAnterior = parseInt(frenteCalculadora.textContent);
    operacion = "suma";
    frenteCalculadora.textContent = "+";
});
restar.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    valorAnterior = parseInt(frenteCalculadora.textContent);
    operacion = "resta";
    frenteCalculadora.textContent = "-";
});
multiplicar.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    valorAnterior = parseInt(frenteCalculadora.textContent);
    operacion = "multiplicar";
    frenteCalculadora.textContent = "*";
});
dividir.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    valorAnterior = parseInt(frenteCalculadora.textContent);
    operacion = "dividir";
    frenteCalculadora.textContent = "/";
});

resultado.addEventListener("click", function() {
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    let valorActual = parseInt(frenteCalculadora.textContent);
    switch (operacion) {
        case "suma":
            return frenteCalculadora.innerText = valorAnterior + valorActual;                      
        case "resta":
            return frenteCalculadora.textContent = valorAnterior - valorActual;
        case "dividir":
            return frenteCalculadora.textContent = valorAnterior / valorActual;
        case "multiplicar":
            return frenteCalculadora.textContent = valorAnterior * valorActual;
        default:
            break;
    }
});