package project;

import java.util.Random;

public class Persona {
	String nombre;
	int edad;
	int dni;
	char sexo;
	int peso;
	double altura;
	
	public Persona() {
        this.nombre = "";
        this.edad = 0;
        this.sexo = 'H';
        this.dni = generaDNI();
        this.peso = 0;
        this.altura = 0.0;
	}
	
    public Persona(String nombre, int edad, char sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.dni = generaDNI();
        this.peso = 0;
        this.altura = 0.0;
    }

	public Persona(String nombre, int edad, char sexo, int peso, double altura) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = generaDNI();
		this.sexo = sexo;
		this.peso = peso;
		this.altura = altura;
	}
	
	public int generaDNI() {
        Random random = new Random();
        return 10000000 + random.nextInt(90000000);	
	}
	
	public int calcularIMC() {
		double alturaEnMetros= this.altura / 100.00;
		if ((this.peso / (alturaEnMetros*alturaEnMetros)) < 20 ) {
			return -1;
		}else if( this.peso / (alturaEnMetros*alturaEnMetros) > 20 && (this.peso / (alturaEnMetros*alturaEnMetros) < 25 )){
			return 0;
		}
		return 1;
	}

	@Override
	public String toString() {
		return "Persona [nombre=" + nombre + ", edad=" + edad + ", dni=" + dni + ", sexo=" + sexo + ", peso=" + peso
				+ ", altura=" + altura + "]";
	}
	
	public boolean esMayorDeEdad() {
		return this.edad >= 18;
	}
	
    public char comprobarSexo(char sexo) {
        if (sexo != 'H' && sexo != 'M') {
            return 'H';
        }
        return sexo;
    }
	
	
}
