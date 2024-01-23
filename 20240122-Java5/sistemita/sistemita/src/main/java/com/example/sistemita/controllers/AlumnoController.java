package com.example.sistemita.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.sistemita.models.Alumno;

@RestController
public class AlumnoController {

	List<Alumno> listaAlumnos = new ArrayList<Alumno>(List.of(
			new Alumno("Cacho", "Castaña", 4.5),
			new Alumno("Bob", "Patiño", 9.5),
			new Alumno("Homero", "Simpson", 2.3)));

	@GetMapping("/alumnos")
	public List<Alumno> getAlumnos() {
		return listaAlumnos;
	}

	@GetMapping("/alumnos/{id}")
	public Alumno getAlumnosById(@PathVariable int id) {
		return listaAlumnos.get(id);
	}
	

	@GetMapping("/alumnos/search")
	@ResponseBody
	public List<Alumno> getAlumnosBySearch(@RequestParam String query) {
		List<Alumno> listaBusqueda = new ArrayList<Alumno>();
		for (Alumno a : listaAlumnos) {
			if (a.getNombre().toLowerCase().contains(query.toLowerCase())
					|| a.getApellido().toLowerCase().contains(query.toLowerCase())) {
				listaBusqueda.add(a);
			}
		}
		return listaBusqueda;
	}

//	@DeleteMapping("/alumnos/{id}")
//	public void DeleteAlumnoById(@PathVariable int id) {
//		listaAlumnos.remove(id);
//	}
	
	@DeleteMapping("/alumnos/{id}")
	public String deleteAlumnoById(@PathVariable int id) {
		listaAlumnos.removeIf(alumno -> alumno.getId() == id);
	    return "Eliminando alumno"+ id;
	}

	@PostMapping("/alumnos/nuevo")
	public ResponseEntity<Void> postAlumno(@RequestBody Alumno a) {
		listaAlumnos.add(a);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PutMapping("/alumnos/{id}")
	public void putAlumno(@PathVariable int id, 
			@RequestBody Alumno alumno) {
		Alumno alumnoSeleccionado=null;
		for(Alumno a:listaAlumnos) {
			if(a.getId()==id) alumnoSeleccionado= a;
		}
		if (alumno.getNombre()!=null)
			alumnoSeleccionado.setNombre(alumno.getNombre());
		if (alumno.getApellido()!=null)
			alumnoSeleccionado.setApellido(alumno.getApellido());
		if (alumno.getNota() != 0)
			alumnoSeleccionado.setNota(alumno.getNota());

	}
//	@GetMapping("/alumnos/search")
//	@ResponseBody
//	public String getAlumnosBySearch(@RequestParam String name) {
//		
//		return name;
//	}

}
