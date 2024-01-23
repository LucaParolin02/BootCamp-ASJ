package com.example.proyecto.holaMundo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaMundoController {
	
	@GetMapping("/saludo/{nombre}")
	public String holaMundo(@PathVariable String nombre) {
		return "Hola " + nombre + ", Estamos probando spring";
	}
}
