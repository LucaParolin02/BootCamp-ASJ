//Ejercicio par o impar

/* let num = parseInt(prompt("Ingrese un número:"));
switch(num % 2){
    case 0:
        alert("El número es par");
        break;

    case 1:
        alert("El número no es par");
        break;

    default:
        alert("Ingrese un valor correcto");
        break;
} */

//Ejercicio convertir a ingles la palabra

/* let palabra = prompt("Ingrese una palabra").toLowerCase();
switch(palabra){
    case "casa":
        alert("house");
        break;
    
    case "perro":
        alert("dog");
        break;

    case "arbol":
        alert("Tree");
        break;

    case "pelota":
        alert("ball");
        break;
    
    case "genio":
        alert("genious");
        break;

    default:
        alert("Palabra ingresada incorrecta");
} */

//Ejercicio calificacion peliculas

/* let calificacion = prompt("Ingrese la reseña de su pelicula");
switch(calificacion){
    case "Muy Mala":
        alert("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
        break;
    
    case "Mala":
        alert("Calificaste la película como  Mala. Lo lamentamos mucho.");
        break;

    case "Mediocre":
        alert("Calificaste la película como Mediocre. Trataremos de mejorar");
        break;
    
    case "Buena":
        alert("Calificaste la película como Buena. Estamos agradecidos que le haya gustado");
        break;
    
    case "Muy Buena":
        alert("Calificaste la película como Muy Buena. Orgullosos de que le haya encantado la pelicula");
        break;

    default:
        alert("Ingrese un valor valido");
        break;
} */

//Ejercicio sumatoria

/* let numero= parseInt(prompt("Ingrese un numero a realizar sumatoria"));
let contador = 0;
let acum= 0;
switch(numero){
    case numero:
        while ( contador <= numero){
            acum += contador;
            contador++;
        }
        console.log(acum/contador);
        break;

    default:
        alert("El valor ingresado no es un número");
} */

//Ejercicio contar la cantidad de positivos que ingresa el usuario , para cuando sea negativo

/* let numero= parseInt(prompt("Ingrese un numero"));
let cantPositivos= 0;
while(numero >= 0){
    cantPositivos++;
    numero = parseInt(prompt("vuelva a ingresar otro numero"));
}
console.log("la cantidad de numeros positivos es: " + cantPositivos ); */


//Ejercicio fizz

/* let numero=0;
do {
    numero++;

    if (numero % 5 == 0 && numero % 3 == 0){
        console.log("FizzBuzz");
    }
    else if(numero % 5 == 0){
        console.log("Buzz");
    }
    else if(numero % 3 == 0){
        console.log("Fizz");
    }
    else{
        console.log(numero);
    }
} while (numero < 100); */

//Ejercicio cliente-mozo

let bienvenida = "Buen dia , bienvenido al restaurante Capriot , ¿ Como le va ?";
let carta= "Buenas el menu que tenemos en la carta es: Gaseosa - $250,Medialuna - $100,Café - $50,Pizza - $400"
let precio= 0;

alert(bienvenida);
let opciones = prompt("Perfecto, Que desea realizar. (Pedir carta, Pedir un chiste, Pedir producto,Traer la cuenta,Propina)").toLowerCase();
switch(opciones){

    case "pedir carta":
            alert(carta);
            break;

    case "pedir un chiste":
        alert(" ¿Cuál es el baile favorito del tomate? ¡La salsa! ");
        break;


    case "pedir producto":
        let producto= prompt("Que producto desea agregar").toLowerCase();
        switch(producto){
            case "gaseosa":
                    precio += 250;

            case "medialuna":
                precio += 100;
            
            case "café":
                precio += 50;

            case "pizza":
                precio += 400;
        }
    
    case "propina":
        let propina = parseInt(prompt("¿Cuanta propina desea dejar?"));
        break;
    
    case "Traer la cuenta":
        alert("La cuenta total seria:" + (precio+propina));
        break;

    default:
        alert("Ingrese una opcion válida");
}

