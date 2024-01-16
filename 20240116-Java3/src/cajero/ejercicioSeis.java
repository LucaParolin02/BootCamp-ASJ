package cajero;

import java.util.Scanner;

public class ejercicioSeis {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[][] matriz = new int[4][4];
        boolean matrizLlena = false;
        int opcion = 0;

        while (opcion != 7) {
            mostrarMenu();
            opcion = scanner.nextInt();

            switch (opcion) {
                case 1:
                    llenarMatriz(matriz, scanner);
                    matrizLlena = true;
                    break;
                case 2:
                    if (matrizLlena) {
                        System.out.print("Ingrese el número de la fila que desea sumar (0-3): ");
                        int numeroFila = scanner.nextInt();
                        if (validarFila(numeroFila)) {
                            int sumaFila = sumarFila(matriz, numeroFila);
                            System.out.println("La suma de la fila " + numeroFila + " es: " + sumaFila);
                        } else {
                            System.out.println("Número de fila incorrecto.");
                        }
                    } else {
                        System.out.println("Debes llenar la matriz primero.");
                    }
                    break;
                case 3:
                    if (matrizLlena) {
                        System.out.print("Ingrese el número de la columna que desea sumar (0-3): ");
                        int numeroColumna = scanner.nextInt();
                        if (validarColumna(numeroColumna)) {
                            int sumaColumna = sumarColumna(matriz, numeroColumna);
                            System.out.println("La suma de la columna " + numeroColumna + " es: " + sumaColumna);
                        } else {
                            System.out.println("Número de columna incorrecto.");
                        }
                    } else {
                        System.out.println("Debes llenar la matriz primero.");
                    }
                    break;
                case 4:
                    if (matrizLlena) {
                        int sumaDiagonalPrincipal = sumarDiagonalPrincipal(matriz);
                        System.out.println("La suma de la diagonal principal es: " + sumaDiagonalPrincipal);
                    } else {
                        System.out.println("Debes llenar la matriz primero.");
                    }
                    break;
                case 5:
                    if (matrizLlena) {
                        int sumaDiagonalInversa = sumarDiagonalInversa(matriz);
                        System.out.println("La suma de la diagonal inversa es: " + sumaDiagonalInversa);
                    } else {
                        System.out.println("Debes llenar la matriz primero.");
                    }
                    break;
                case 6:
                    if (matrizLlena) {
                        double mediaMatriz = calcularMediaMatriz(matriz);
                        System.out.println("La media de todos los valores de la matriz es: " + mediaMatriz);
                    } else {
                        System.out.println("Debes llenar la matriz primero.");
                    }
                    break;
                case 7:
                    System.out.println("Saliendo del programa.");
                    break;
                default:
                    System.out.println("Opción no válida. Por favor, elija una opción del menú.");
            }
        }

        scanner.close();
    }

    private static void mostrarMenu() {
        System.out.println("\nMenú:");
        System.out.println("1. Rellenar TODA la matriz de números");
        System.out.println("2. Suma de una fila");
        System.out.println("3. Suma de una columna");
        System.out.println("4. Sumar la diagonal principal");
        System.out.println("5. Sumar la diagonal inversa");
        System.out.println("6. La media de todos los valores de la matriz");
        System.out.println("7. Salir");
        System.out.print("Seleccione una opción: ");
    }

    private static void llenarMatriz(int[][] matriz, Scanner scanner) {
        System.out.println("Ingrese los valores de la matriz:");
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print("Fila " + i + ", Columna " + j + ": ");
                matriz[i][j] = scanner.nextInt();
            }
        }
        System.out.println("Matriz llenada correctamente.");
    }

    private static boolean validarFila(int numeroFila) {
        return numeroFila >= 0 && numeroFila < 4;
    }

    private static boolean validarColumna(int numeroColumna) {
        return numeroColumna >= 0 && numeroColumna < 4;
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

    private static int sumarDiagonalPrincipal(int[][] matriz) {
        int suma = 0;
        for (int i = 0; i < matriz.length; i++) {
            suma += matriz[i][i];
        }
        return suma;
    }

    private static int sumarDiagonalInversa(int[][] matriz) {
        int suma = 0;
        for (int i = 0; i < matriz.length; i++) {
            suma += matriz[i][matriz.length - 1 - i];
        }
        return suma;
    }

    private static double calcularMediaMatriz(int[][] matriz) {
        int totalElementos = matriz.length * matriz[0].length;
        int sumaTotal = 0;

        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                sumaTotal += matriz[i][j];
            }
        }

        return (double) sumaTotal / totalElementos;
    }
}