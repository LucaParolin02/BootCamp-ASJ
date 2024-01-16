package cajero;

import java.util.Scanner;

public class ejercicioDos {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int[] numeros = new int[15];
		int aux = 0;
		int num = 0;

		for(int i = 0 ; i < numeros.length ; i++) {
			System.out.println("Ingrese un numero:");
			num = scanner.nextInt();
			numeros[i] = num;
		}
		        
        aux = numeros[numeros.length - 1]; 
        for (int i = numeros.length - 1; i > 0; i--) {
            numeros[i] = numeros[i - 1]; 
        }
        numeros[0] = aux; 
       
        System.out.println("Array después de rotar:");
        for (int i = 0; i < numeros.length; i++) {
            System.out.print(numeros[i] + " ");
        }
		
		scanner.close();
	}
	
}
