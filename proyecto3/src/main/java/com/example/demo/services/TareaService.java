package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.TareaModel;
import com.example.demo.repositories.TareaRepository;

@Service
public class TareaService {

	@Autowired
	TareaRepository tareaRepository;
	
	//obtener tarea 
	public List<TareaModel> obtenerTareas(){
		return tareaRepository.findAll(); //SELECT * FROM TAREAS
	}
	
	//obtener tarea por id
	public Optional<TareaModel> obtenerTareaById(int id) {
		return tareaRepository.findById(id);
	}
	
	//insertar tarea
	public String crearTarea(TareaModel tarea) {
		tareaRepository.save(tarea);
		return "Tarea creada correctamente";
	}
	//eliminar tarea
	public String eliminarTarea(int id) {
	    Optional<TareaModel> tareaOptional = tareaRepository.findById(id);

	    if (tareaOptional.isPresent()) {
	        TareaModel tarea = tareaOptional.get();
	        tarea.setEstado(true);
	        tareaRepository.save(tarea);
	        return "Tarea eliminada correctamente";
	    } else {
	        return "No se encontró la tarea con ID: " + id;
	    }
	}
	
	//update tarea 
	public String modificartarea(int id, TareaModel tarea) {
	    Optional<TareaModel> optionalTarea = tareaRepository.findById(id);

	    if (optionalTarea.isPresent()) {
	        TareaModel t = optionalTarea.get();
	        t.setNombre(tarea.getNombre()); 
	        tareaRepository.save(t);
	        return "TAREA: " + id + " Modificado correctamente";
	    }

	    return "Error";
	}
	
	//tareas con estado true
	public List<TareaModel> getTareasEliminadas() {
	    return tareaRepository.findEliminadas();
	}

}
