

let nombre = document.getElementById("nombre");
	let apellido = document.getElementById("apellido")
	let nota = document.getElementById("nota")



	//let datosAlumnoPut = {
	//	nombre: nombrePut.value,
	//	apellido: apellidoPut.value,
	//	nota: notaPut.value
	//};

let id = localStorage.getItem('id') || null;

if (id !== null) {
	fetch(`http://localhost:8080/alumnos/${id}`)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			nombre.value = data.nombre;
			apellido.value = data.apellido;
			nota.value = data.nota;
		})
}

document.getElementById("miFormulario").addEventListener("submit", function(event) {
	event.preventDefault();

//	let nombre = document.getElementById("nombre").value;
//	let apellido = document.getElementById("apellido").value
//	let nota = document.getElementById("nota").value



	let datosAlumno = {
		nombre: nombre.value,
		apellido: apellido.value,
		nota: nota.value
	};

	if (id !== null) {
		fetch(`http://localhost:8080/alumnos/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(datosAlumno)
		})
			.then(() => console.log("listorti"))
			.catch(error => {
				console.error('Error al enviar la solicitud:', error);
			});
	}
	else {
		fetch('http://localhost:8080/alumnos/nuevo', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(datosAlumno)
		})
			.then(() => console.log("listorti"))
			.catch(error => {
				console.error('Error al enviar la solicitud:', error);
			});
	}
	localStorage.removeItem('id')
	location.href="./lista.html"
});


