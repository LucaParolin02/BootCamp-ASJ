package cajero;

import java.util.Random;

public class ejercicioTres {

	public static void main(String[] args) {
        int[] numeros = new int[20];
        Random random = new Random();
        
        for (int i = 0; i < numeros.length; i++) {
            numeros[i] = random.nextInt(101);  
        }
        System.out.println("Números sin ordenar:");
        mostrarNumeros(numeros);
        
        int[] pares = obtenerPares(numeros);
        int[] impares = obtenerImpares(numeros);
        int[] nuevosNumeros = combinarArrays(pares, impares);
        
        System.out.println("Números ordenados:");
        mostrarNumeros(nuevosNumeros);
       
	}
	

	private static void mostrarNumeros(int[] array) {
        for (int numero : array) {
            System.out.print(numero + " ");
        }
        System.out.println();
    }
	
    private static int[] obtenerPares(int[] array) {
        int countPares = 0;
        for (int numero : array) {
            if (numero % 2 == 0) {
                countPares++;
            }
        }

        int[] pares = new int[countPares];
        int index = 0;
        for (int numero : array) {
            if (numero % 2 == 0) {
                pares[index++] = numero;
            }
        }

        return pares;
    }
    
    private static int[] obtenerImpares(int[] array) {
        int countImpares = 0;
        for (int numero : array) {
            if (numero % 2 != 0) {
                countImpares++;
            }
        }

        int[] impares = new int[countImpares];
        int index = 0;
        for (int numero : array) {
            if (numero % 2 != 0) {
                impares[index++] = numero;
            }
        }

        return impares;
    }
    
    private static int[] combinarArrays(int[] array1, int[] array2) {
        int[] resultado = new int[array1.length + array2.length];
        int index = 0;

        for (int numero : array1) {
            resultado[index++] = numero;
        }

        for (int numero : array2) {
            resultado[index++] = numero;
        }

        return resultado;
    }

}
