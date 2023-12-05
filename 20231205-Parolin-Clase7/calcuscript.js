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


C.addEventListener("click",function(){
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    frenteCalculadora.innerText = 0;
})
CE.addEventListener("click",function(){
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    frenteCalculadora.innerText = 0;
})
cero.addEventListener("click",function(){
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    frenteCalculadora.innerText = 0;
})
uno.addEventListener("click",function(){
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    frenteCalculadora.innerText = 1;
})
dos.addEventListener("click",function(){
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    frenteCalculadora.innerText = 2;
})
tres.addEventListener("click",function(){
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    frenteCalculadora.innerText = 3;
})
cuatro.addEventListener("click",function(){
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    frenteCalculadora.innerText = 4;
})
cinco.addEventListener("click",function(){
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    frenteCalculadora.innerText = 5;
})
seis.addEventListener("click",function(){
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    frenteCalculadora.innerText = 6;
})
siete.addEventListener("click",function(){
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    frenteCalculadora.innerText = 7;
})
ocho.addEventListener("click",function(){
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    frenteCalculadora.innerText = 8;
})
nueve.addEventListener("click",function(){
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    frenteCalculadora.innerText = 9;
})
mas.addEventListener("click",function(){
    let frenteCalculadora = document.getElementById("frenteCalculadora");
    frenteCalculadora.innerText += "+";
})
