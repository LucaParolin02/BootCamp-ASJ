let botonesAñadir = document.getElementsByClassName("añadir");

for (let i = 0; i < botonesAñadir.length; i++) {
    botonesAñadir[i].addEventListener("click", function () { 
        window.location.href = ("producto.html");
    });
}