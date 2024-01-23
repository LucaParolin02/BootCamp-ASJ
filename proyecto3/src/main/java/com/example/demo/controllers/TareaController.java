package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.TareaModel;
import com.example.demo.services.TareaService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/tareas")
public class TareaController {
	
	@Autowired
	TareaService tareaService;
	
	@GetMapping("/test")
	public ResponseEntity<String> testing() {
		return new ResponseEntity<String>("Hola mundo", HttpStatus.OK);
	}
	
	@GetMapping()
	public ResponseEntity<List<TareaModel>> getTareasAll() {
		return new ResponseEntity<List<TareaModel>>(tareaService.obtenerTareas(),HttpStatus.OK);
	}
	
	@GetMapping("/eliminadas")
	public List<TareaModel> getTareasEliminadas() {
	    return tareaService.getTareasEliminadas(); 
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<TareaModel>> getTareaById(@PathVariable int id) {
		return  ResponseEntity.ok(tareaService.obtenerTareaById(id));
	}
	
	@PostMapping()
	public ResponseEntity<String> createTarea(@RequestBody TareaModel tarea) {
		return new ResponseEntity<String>(tareaService.crearTarea(tarea),HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteTarea(@PathVariable int id) {
		return new ResponseEntity<String>(tareaService.eliminarTarea(id), HttpStatus.NO_CONTENT);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateTarea(@PathVariable Integer id, @RequestBody TareaModel tarea) {
		return new ResponseEntity<String>(tareaService.modificartarea(id, tarea), HttpStatus.OK);
	}
}
