
const tabla = document.getElementById("table")
const tBody = document.getElementById("tbody")


fetch("http://localhost:8080/alumnos")
	.then(res => res.json())
	.then(data => mostrarAlumno(data))


function mostrarAlumno(alumnos) {

	for (let alumno of alumnos) {

		let tr = document.createElement('tr');
		let tdId = document.createElement('td');
		let tdNombre = document.createElement('td');
		let tdApellido = document.createElement('td');
		let tdNota = document.createElement('td');
		let tdAccionBorrar = document.createElement("td");
		let tdAccionEditar = document.createElement("td");
		tdId.textContent = alumno.id;
		tdNombre.textContent = alumno.nombre;
		tdApellido.textContent = alumno.apellido;
		tdNota.textContent = alumno.nota;

		tdAccionBorrar.className = "btn btn-danger btn-sm ml-3 p-1 mt-1";
		tdAccionBorrar.innerHTML = "Eliminar";
		tdAccionBorrar.addEventListener("click", function() {
			eliminarAlumno(alumno);
		});
		tdAccionEditar.className = "btn btn-success btn-sm ml-3 p-1 mt-1";
		tdAccionEditar.innerHTML = "Editar";
		tdAccionEditar.addEventListener("click", function() {
			editarAlumno(alumno);
		});

		tr.appendChild(tdId)
		tr.appendChild(tdNombre)
		tr.appendChild(tdApellido)
		tr.appendChild(tdNota)
		tr.appendChild(tdAccionBorrar);
		tr.appendChild(tdAccionEditar);

		tabla.appendChild(tr)
	}
}


function eliminarAlumno(alumno) {
	fetch(`http://localhost:8080/alumnos/${alumno.id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
	})
		.then(() => location.reload())
		.catch(error => {
			console.error('Error al enviar la solicitud:', error);
		});
}

function editarAlumno(alumno) {
	localStorage.setItem('id', alumno.id);
	location.href='./crear.html'

}