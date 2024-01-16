package cajero;

import java.util.Random;
import java.util.Scanner;

public class EjercicioCuatroYCinco {

	public static void main(String[] args) {
		int[][] matriz = generarMatrizAleatoria();
		mostrarMatriz(matriz);
		
		 Scanner scanner = new Scanner(System.in);
		 System.out.println("1. Sumar una fila");
	     System.out.println("2. Sumar una columna");
	     System.out.print("Elija una opción (1 o 2): ");
	        
	     int opcion = scanner.nextInt();
	     
	     if (opcion == 1) {
	            int numeroFila = new Random().nextInt(3); 
	            int sumaFila = sumarFila(matriz, numeroFila);
	            System.out.println("La suma de la fila " + numeroFila + " es: " + sumaFila);
	        } else if (opcion == 2) {
	            int numeroColumna = new Random().nextInt(3);  
	            int sumaColumna = sumarColumna(matriz, numeroColumna);
	            System.out.println("La suma de la columna " + numeroColumna + " es: " + sumaColumna);
	        }
	     
	     
	     scanner.close();
	}
	
	private static void mostrarMatriz(int[][] matriz) {
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }
    }
	
	private static int[][] generarMatrizAleatoria() {
        int[][] matriz = new int[3][3];
        Random random = new Random();

        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                int numeroAleatorio;
                boolean repetido;

                do {
                    repetido = false;
                    numeroAleatorio = random.nextInt(21);
                    
                    for (int k = 0; k < i && !repetido; k++) {
                        for (int l = 0; l < j && !repetido; l++) {
                            if (matriz[k][l] == numeroAleatorio) {
                                repetido = true;
                            }
                        }
                    }
                } while (repetido);

                matriz[i][j] = numeroAleatorio;
            }
        }

        return matriz;
    }
	
    private static int sumarFila(int[][] matriz, int numeroFila) {
        int suma = 0;
        for (int i = 0; i < matriz[numeroFila].length; i++) {
            suma += matriz[numeroFila][i];
        }
        return suma;
    }

    private static int sumarColumna(int[][] matriz, int numeroColumna) {
        int suma = 0;
        for (int i = 0; i < matriz.length; i++) {
            suma += matriz[i][numeroColumna];
        }
        return suma;
    }

}
