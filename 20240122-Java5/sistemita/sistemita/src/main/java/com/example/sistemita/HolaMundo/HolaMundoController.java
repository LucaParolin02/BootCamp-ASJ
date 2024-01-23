package com.example.sistemita.HolaMundo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaMundoController {
	
	@GetMapping("/nada")
	public String getHolaMundo() {
		return "Hola guachin";
	}
}

/*
 *SPRINGBOOT
 *
 * - Controllers = maneja la peticion de la API
 * - Services = Logica de negocio
 * - Repositories = permite hacer consultas a la BD
 * - Models = Representacion de la estructura de una entidad
 * */
 