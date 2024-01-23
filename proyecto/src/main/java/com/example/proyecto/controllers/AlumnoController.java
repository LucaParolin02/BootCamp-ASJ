package com.example.proyecto.controllers;

import java.util.ArrayList;
import java.util.List;
import com.example.proyecto.models.Alumno;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AlumnoController {
	
	List<Alumno> alumnos = new ArrayList<Alumno>(
			List.of(new Alumno(1,"Bob","Patiño",9.5),
					new Alumno(2,"Jose","Deodo",3),
					new Alumno(3,"Troy","McLure",2.5),
					new Alumno(4,"Edna","Krabaples",8.7)));
	
	@GetMapping("/alumnos")
	public List<Alumno> listPersonas() {
		return this.alumnos;
	}
	
	@GetMapping("alumnos/{id}")
	public Alumno getAlumnoById(@PathVariable int id) {
		for (Alumno alumno: alumnos) {
			if(alumno.getId() == id) {
				return alumno;
			}
		}
		return null;
	}
	
	@DeleteMapping("alumnos/{id}")
	public List<Alumno> deleteAlumnoById(@PathVariable int id) {
		alumnos.removeIf(alumno -> alumno.getId() == id);
	    return this.alumnos;
	}
	
	@PostMapping("alumnos")
	public List<Alumno> addAlumno(@RequestBody Alumno alumno) {
		alumnos.add(alumno);
	    return this.alumnos;		
	}
	
	@PutMapping("alumnos/{id}")
	public List<Alumno> editAlumnoById(@PathVariable int id,@RequestBody Alumno alumnoEditado){
		for (Alumno alumno : alumnos) {
	        if (alumno.getId() == id) {
	            if (alumnoEditado.getNombre() != null) {
	                alumno.setNombre(alumnoEditado.getNombre());
	            }
	            if (alumnoEditado.getApellido() != null) {
	                alumno.setApellido(alumnoEditado.getApellido());
	            }
	            if (alumnoEditado.getNota() != 0.0) {
	                alumno.setNota(alumnoEditado.getNota());
	            }          
	        }
	    }
		return this.alumnos;
	}
}
