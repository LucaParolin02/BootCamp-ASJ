import java.util.Scanner;

public class Estructuras {

	public static void main(String[] args) {
//          EJERCICIO NOTAS		
//        Scanner scanner = new Scanner(System.in);
//
//        System.out.println("¿Cuantas notas desea ingresar para el primer caso?");
//        int myInt1 = scanner.nextInt();
//        int acum1 = 0;
//
//        for (int j = 1; j <= myInt1; j++) {
//            int nota = obtenerNota(scanner);
//            acum1 += nota;
//        }
//        System.out.println("Su promedio es de: " + (acum1 /  myInt1));
//
//        System.out.println("¿Cuantas notas desea ingresar para el segundo caso?");
//        int myInt2 = scanner.nextInt();
//        int acum2 = 0;
//        int i = 1;
//
//        while (i <= myInt2) {
//            int nota = obtenerNota(scanner);
//            acum2 += nota;
//            i++;
//        }
//        System.out.println("Su promedio es de: " + (acum2 /  myInt2));
//
//        System.out.println("¿Cuantas notas desea ingresar para el tercer caso?");
//        int myInt3 = scanner.nextInt();
//        int acum3 = 0;
//        int o = 1;
//
//        do {
//            int nota = obtenerNota(scanner);
//            acum3 += nota;
//            o++;
//        } while (o <= myInt3);
//
//        System.out.println("Su promedio es de: " + (acum3 / myInt3));
//
//        scanner.close();
		
//        EJERCICIO DE TRIANGULO		
//        Scanner scanner = new Scanner(System.in);
//
//        System.out.print("Introduce el primer angulo: ");
//        int angulo1 = scanner.nextInt();
//
//        System.out.print("Introduce el segundo angulo: ");
//        int angulo2 = scanner.nextInt();
//
//        System.out.print("Introduce el tercer angulo: ");
//        int angulo3 = scanner.nextInt();
//        String resultado = validarTriangulo(angulo1, angulo2, angulo3);
//        System.out.println(resultado);
//
//        scanner.close();
	
		
//       String comienza con letra o numero		
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("Ingrese la palabra");
//		String myPalabra = scanner.nextLine();
//		scanner.close();
//		
//        if (Character.isDigit(myPalabra.charAt(0))) {
//            System.out.println("La palabra comienza con un número.");
//        } else {
//            System.out.println("La palabra no comienza con un número.");
//        }
		
// 	Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.
//		Scanner scanner = new Scanner(System.in);
//		System.out.print("Ingrese el valor de n: ");
//        int n = scanner.nextInt();
//        System.out.print("Ingrese el valor de m: ");
//        int m = scanner.nextInt();
//        int result = 0;
//		while(n < m) {
//			if(n%2 == 0) {
//				result += n;
//			}
//			n++;
//		}
//		scanner.close();
//		System.out.println(result);
		
		
	// Crear un programa que determine si un número es perfecto o no,
	//(se dice que un número es perfecto si el número es igual a la suma de sus divisores positivos, excluido él mismo., Ejemplos 6 = 1 + 2 + 3)
		
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("Ingrese un numero");
//		int n = scanner.nextInt();
//		int result = 0;
//		
//		for (int i = 1; i < n; i++) {
//            if (n % i == 0) {
//                result += i;
//            }
//        }
//		
//		if (result == n) {
//			System.out.println("El numero es perfecto");
//		} else {
//			System.out.println("El numero no es perfecto");
//		}
		
		
	// Ejercicio dibujo
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese un número");
        int n = scanner.nextInt();

        for (int i = 0; i < n; i++) {
            if (i % 2 != 0) {
                System.out.print(" ");
            }

            for (int j = 0; j < (i % 2 == 0 ? n : n - 1); j++) {
                System.out.print(" *");
            }
            System.out.println();
        }

        scanner.close();
		
    }
//          EJERCICIO TRIANGULO
//    public static String validarTriangulo(int angulo1, int angulo2, int angulo3) {
//        int sumaAngulos = angulo1 + angulo2 + angulo3;
//        if (sumaAngulos == 180) {
//            return "triangulo  valido";
//        } else {
//            return "triangulo no valido";
//        }
//    }

	
//     EJERCICIO DE NOTAS	
//    private static int obtenerNota(Scanner scanner) {
//        int nota;
//        do {
//            System.out.println("Ingrese una nota entre 1 y 10:");
//            nota = scanner.nextInt();
//            if (nota < 1 || nota > 10) {
//                System.out.println("Error: La nota debe estar entre 1 y 10.");
//            }
//        } while (nota < 1 || nota > 10);
//        return nota;		
//	}

}
