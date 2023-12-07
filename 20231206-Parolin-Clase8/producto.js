let cantidad = document.getElementById("cantidad");
let añadir= document.getElementById("boton");
let producto = [
    { nombre: "Mouse Gamer", precio: 5000, imagen: "img/mouse.jpg" } ];


añadir.addEventListener("click", () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || []; //recupero los datos guardados en localStorage y lo convierto a objeto en caso de estar vacio lo crea           
    carrito.push(producto); //añado al array el producto
    localStorage.setItem("carritoProductos", JSON.stringify(carrito)); //guardo en el localStorage
    alert("Se añadio el producto al carrito")
    window.location.href = ("carrito.html");
});