let boton = document.getElementById("boton");
let ciudad = document.getElementById("ciudad");

function cargarCiudad(){
    let temperatura = document.getElementById("temperatura");
    let input = document.getElementById("usuarioInput").value;
    let wicon = document.getElementById("wicon");
    let descripcion = document.getElementById("descripcion");
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=fdd533266e28101881f610f2b8f1ebe1")
    .then((response) => response.json()) 
    .then((json) => {
      ciudad.textContent = json.name;
      temperatura.innerHTML = Math.round(json.main.temp-273,5) + "<sup> °C</sup>";
      wicon.src = "https://openweathermap.org/img/wn/"+json.weather[0].icon+"@2x.png";
      descripcion.innerHTML = json.weather[0].description;
    })
    .catch((error) => console.log("Ocurrió un error: " + error));
}

boton.addEventListener("click",()=>{
    cargarCiudad();
    document.querySelector(".container").style.visibility = "visible"
});