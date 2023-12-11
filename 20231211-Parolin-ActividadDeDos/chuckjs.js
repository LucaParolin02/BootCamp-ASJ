let chiste = document.getElementById("chiste");
let boton = document.getElementById("actualizar")

boton.addEventListener("click",()=>{
    fetch(`https://api.chucknorris.io/jokes/random`)
          .then((response) => response.json()) 
          .then((json) => {
            chiste.innerText = json.value;
          })
          .catch((error) => console.log("Ocurrió un error: " + error));
});