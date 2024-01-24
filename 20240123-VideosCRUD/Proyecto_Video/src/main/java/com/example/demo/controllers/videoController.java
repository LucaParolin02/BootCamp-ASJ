package com.example.demo.controllers;

import java.util.List;
import java.util.Map;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.errorsInputs;
import com.example.demo.models.VideoModels;
import com.example.demo.services.VideoServices;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/videos")
public class videoController {

	@Autowired
	VideoServices videoServices;

	@GetMapping()
	public ResponseEntity<List<VideoModels>> getVideos() {
		return ResponseEntity.ok(videoServices.obtenerVideos());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<VideoModels>> getVideosById(@PathVariable int id) {
		return ResponseEntity.ok(videoServices.obtenerVideoById(id));
	}

	@PostMapping()
	public ResponseEntity<?> postMethodName(@Valid @RequestBody VideoModels video, BindingResult bindingResult) {
		
		if (bindingResult.hasErrors()) {
			
			Map<String,String> errors = new  errorsInputs().validacioninputs(bindingResult);
			System.out.println(errors);
			return new ResponseEntity<String>("error", HttpStatus.BAD_REQUEST);
		}
		
		return ResponseEntity.ok(videoServices.postVideo(video));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteVideo(@PathVariable int id) {
		return ResponseEntity.ok(videoServices.borrarVideo(id));
	}

	@PutMapping("/{id}")
	public ResponseEntity<VideoModels> incrementar(@PathVariable int id, @RequestBody VideoModels video) {
		return ResponseEntity.ok(videoServices.incrementar(id, video));
	}

	@GetMapping("/filtrar/{nombre}")
	 public ResponseEntity<List<VideoModels>> filterByName(@PathVariable String nombre) {
        return ResponseEntity.ok(videoServices.filtrarNombre(nombre));
    }
	
	@GetMapping("/categoria/{categoria}")
	 public ResponseEntity<List<VideoModels>> filterByCategoria(@PathVariable String categoria) {
       return ResponseEntity.ok(videoServices.filtrarCategoria(categoria));
   }
}
