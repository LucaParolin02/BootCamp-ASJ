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

/* let bienvenida = "Buen dia , bienvenido al restaurante Capriot , ¿ Como le va ?";
let precio = 0;
let bandera = false;
alert(bienvenida);
do{
    let opciones = prompt("Perfecto, Que desea realizar. (Pedir carta, Pedir un chiste, Pedir producto,Traer la cuenta,Propina)").toLowerCase();
    let carta = "Buenas el menu que tenemos en la carta es: \n Gaseosa - $250 \n Medialuna - $100 \n Café - $50 \n Pizza - $400"
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
                    break;

                case "medialuna":
                    precio += 100;
                    break;
            
                case "café":
                    precio += 50;
                    break;

                case "pizza":
                    precio += 400;
                    break;
        }
        break;

        case "propina":
            let propina = parseInt(prompt("¿Cuanta propina desea dejar?"));
        break;

        case "Traer la cuenta":
            alert("La cuenta total seria:" + (precio+propina));
            bandera = true;
        break;

        default:
            alert("Ingrese una opcion válida");
            bandera = true;
    }
} while (bandera == true); */


// Ejercicio piramide

let numero= parseInt(prompt("Ingrese un numero"));
let mensaje = "";
let i= 0;

while ( i < numero){
    mensaje += "*";
    console.log(mensaje);
    i++;
}
mensaje.split();
while ( i > 0){
        mensaje[i] = "";
        console.log(mensaje);
        i--;
} 

//Ejercicio factorial

/* let numero2 = parseInt(prompt("Ingrese su numero"));
let resultado = 1;
for(let i = 1 ; i <= numero2 ; i++){
    resultado *= i;
}
console.log(resultado); */