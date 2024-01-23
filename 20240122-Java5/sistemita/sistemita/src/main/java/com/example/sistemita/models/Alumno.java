package com.example.sistemita.models;

public class Alumno {
	private String nombre;
	private String apellido;
	private double nota;
	private int id;
	private static int contador=0;
	public Alumno(String nombre, String apellido, double nota) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.nota = nota;
		this.id=contador++;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public double getNota() {
		return nota;
	}
	public void setNota(double nota) {
		this.nota = nota;
	}
	
	
	
}
