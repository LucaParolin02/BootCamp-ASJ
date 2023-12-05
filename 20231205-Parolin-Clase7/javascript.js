//Ejercicio Mozo

/* const bienvenida =  () => {alert("Buen dia , bienvenido al restaurante Capriot , ¿ Como le va ?")};
const opciones = () => prompt("Perfecto, Que desea realizar. (Pedir carta, Pedir un chiste, Pedir producto,Traer la cuenta,Propina)").toLowerCase();
const carta  = () => alert("Buenas el menu que tenemos en la carta es: \n Gaseosa - $250 \n Medialuna - $100 \n Café - $50 \n Pizza - $400");
const pedirPropinas = () =>  parseInt(prompt("¿Cuanta propina desea dejar?"));
const chiste = () => alert(" ¿Cuál es el baile favorito del tomate? ¡La salsa! ");
const pedirProducto = () => prompt("¿Que producto desea agregar? , en caso de no querer más escriba Salir").toLowerCase();
const cuentaFinal = () => alert(`La cuenta total es de ${precio}`);

let bandera = false;
let precio = 0;


bienvenida();
do {
    let banderaProducto = false;
    let opcion =  opciones();
    switch(opcion){

        case "pedir carta":
            carta();
            break;

        case "pedir un chiste":
            chiste();
            break;

        case "pedir producto":
            do{
                let producto= pedirProducto();
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

                    case "salir":
                        banderaProducto = true;
                        break; 

                    default:
                        alert("Usted pidio algo que no es del menú");
                }
            }while(banderaProducto == false);
            break;

        case "traer la cuenta":
            cuentaFinal();
            bandera = true;
            break;

        case "propina":
            let propina = pedirPropinas();
            precio += propina;
            break;

        default:
            alert("La opcion que usted eligió no es valida");
    }

} while (bandera == false); */

//Fibonacci version 1

/* function fibonacci(numero){
    const arr = [];
    let i = 0;
    let acum = 0;
    let actual = 1;

    while (i < numero){
        arr.push(acum);
        acum += actual;
        arr.push(actual);
        actual += acum;
        i++;
    }

    console.log(arr);
}

const suNumero = parseInt(prompt("Ingrese un numero a realizar fibonacci"));
fibonacci(suNumero); */

// fibonacci version 2
/* function fibonacci(numero){
    let arr = [0, 1];
    for(let i = 2; i < numero; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    console.log(arr);
}

const suNumero = parseInt(prompt("Ingrese un numero a realizar fibonacci"));
fibonacci(suNumero); */

// ejercicio nombre apellido

let boton = document.getElementById("enviar");

boton.addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let nombre1 = document.getElementById("nombre1");
    let apellido2 = document.getElementById("apellido2");

    nombre1.innerHTML = nombre;
    apellido2.innerHTML = apellido;
})

