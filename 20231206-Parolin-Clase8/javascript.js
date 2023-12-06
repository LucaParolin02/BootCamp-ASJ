let input = document.getElementById("palabra");

input.addEventListener("keydown", function(boton){
    const caracter = boton.key;
    let palabraCambiada = document.getElementById("palabraCambiada");
        switch(caracter){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                palabraCambiada.innerText += "_";
                break;
            
            case " ":
                palabraCambiada.innerHTML += "&nbsp&nbsp&nbsp&nbsp" ;
                break;

            default:
                palabraCambiada.innerText += caracter;
        } 
})