package project;

import java.util.ArrayList;
import java.util.Scanner;

public class Clases {

	public static void main(String[] args) {
		
//		Automovil auto = new Automovil(2024, "Ferrari", "Roja");
//		
//		auto.setColor("Verde");
//		System.out.println(auto.getAnio()); 
//		System.out.println(auto.getColor());
		
		//EJERCICIO UNO
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("Ingrese el primer numero");
//		int num1 = scanner.nextInt();
//		System.out.println("Ingrese el segundo numero");
//		int num2 = scanner.nextInt();
//		EjercicioUno numeros = new EjercicioUno(num1,num2);
//		scanner.close();
//		
//		System.out.println("La suma de los numeros es: " + numeros.sumar());
//		System.out.println("La resta de los numeros es: "+ numeros.restar());
//		System.out.println("La multiplicacion de los numeros es: "+ numeros.multiplicar());
//		System.out.println("La division de los numeros es: "+ numeros.dividir());
//		
		//EJERCICIO DOS
		
//		Cuenta cuenta = new Cuenta("Roberto");	
//		Cuenta cuenta2 = new Cuenta("Juan",90000);
//		
//		System.out.println(cuenta.toString());
//		System.out.println(cuenta2.toString());
//		
//		Scanner scanner = new Scanner(System.in);
//		System.out.print("¿Que cantidad desea ingresar?: ");
//		double cant = scanner.nextDouble();
//		cuenta.ingresar(cant);
//		System.out.println(cuenta.toString());
//		
//		System.out.print("¿Que cantidad desea retirar?: ");
//		double cant2 = scanner.nextDouble();
//		cuenta.retirar(cant2);
//		System.out.println(cuenta.toString());
//		
//		scanner.close();
		
		//EJERCICIO TRES
		
//		  Scanner scanner2 = new Scanner(System.in);
//        ArrayList<Password> contraseñas = new ArrayList<>();  
//        System.out.print("Ingrese la cantidad de contraseñas a generar (o presione Enter para usar 1): ");
//        String inputCantidad = scanner2.nextLine();
//
//        int cantidad;
//        if (inputCantidad.isEmpty()) {
//            cantidad = 1;
//        } else {
//            cantidad = Integer.parseInt(inputCantidad);
//        }
//
//        for (int i = 0; i < cantidad; i++) {
//            System.out.print("Ingrese la longitud de la contraseña " + (i + 1) + " (o presione Enter para usar 8): ");
//            String inputLongitud = scanner2.nextLine();
//            
//            int longitud;
//            if (inputLongitud.isEmpty()) {
//                longitud = 8;
//            } else {
//                longitud = Integer.parseInt(inputLongitud);
//            }
//
//            Password password = new Password(longitud);
//            contraseñas.add(password);
//        }
//        
//        System.out.println("\nContraseñas generadas:");
//        for (Password password : contraseñas) {
//            System.out.println("Contraseña: " + password.getContraseña() +
//                    ", Longitud: " + password.getLongitud() +
//                    ", Fuerte: " + password.esFuerte());
//        }
//
//        scanner2.close();
       
		
		//EJERCICIO CUATRO 
		
		Scanner scanner3 = new Scanner(System.in);
		System.out.println("Ingrese nombre");
		String nombre= scanner3.nextLine();
		System.out.println("Ingrese edad");
		int edad= scanner3.nextInt();
		scanner3.nextLine();
		System.out.println("Ingrese sexo");
		char sexo= scanner3.nextLine().charAt(0);
		System.out.println("Ingrese peso");
		int peso= scanner3.nextInt();
		System.out.println("Ingrese altura");
		double altura= scanner3.nextDouble();
		ArrayList<Persona> personas = new ArrayList<>();
		
		Persona persona1 = new Persona(nombre,edad,sexo,peso,altura);
		personas.add(persona1);
		Persona persona2= new Persona(nombre,edad,sexo);
		personas.add(persona2);
		Persona persona3 = new Persona();
		personas.add(persona3);
		
		System.out.println("Vamos a verificar si cada persona esta en su peso ideal, "
				+ "\n 1. Esta en el peso ideal(1)"
				+ "\n 2. Esta por debajo de su peso ideal(0)"
				+ "\n 3.No esta en su peso ideal(-1)");
		System.out.println("Persona 1: " + persona1.calcularIMC());
		System.out.println("Persona 2: " + persona2.calcularIMC());
		System.out.println("Persona 3: " + persona3.calcularIMC());
		
		System.out.println("Vamos a verificar si cada persona es mayor de edad o no");
		System.out.println("Persona 1: " + persona1.esMayorDeEdad());
		System.out.println("Persona 2: " + persona2.esMayorDeEdad());
		System.out.println("Persona 3: " + persona3.esMayorDeEdad());

		for(Persona persona: personas) {
			System.out.println(persona.toString());
		}
		
		scanner3.close();
	}

}
