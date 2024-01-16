package cajero;

import java.util.Scanner;

public class actividadCajero {

    public static void main(String[] args) {
        int saldo = 100000;
        int opcion = 0;
        Scanner scanner = new Scanner(System.in);
        String[] movimientos = new String[100000];
        int indiceMovimientos = 0;

        while (opcion != 5) {
            mostrarMenu();
            opcion = scanner.nextInt();
            switch (opcion) {
                case 1:
                    System.out.println("Ingrese la cantidad a extraer:");
                    int cantidadExtraer = scanner.nextInt();
                    if (cantidadExtraer > 0 && cantidadExtraer <= saldo) {
                        saldo -= cantidadExtraer;
                        movimientos[indiceMovimientos++] = "Extraído: $" + cantidadExtraer;
                        System.out.println("Retiro exitoso. Su nuevo saldo es: " + saldo);
                    } else {
                        System.out.println("Error: Fondos insuficientes o cantidad no válida.");
                    }
                    break;

                case 2:
                    mostrarSaldo(saldo);
                    movimientos[indiceMovimientos++] = "Consultado saldo: $" + saldo;
                    break;

                case 3:
                    recorrerMovimientos(movimientos, indiceMovimientos);
                    break;

                case 4:
                    System.out.println("Ingrese la cantidad a depositar:");
                    int cantidadDepositar = scanner.nextInt();
                    if (cantidadDepositar > 0) {
                        saldo += cantidadDepositar;
                        movimientos[indiceMovimientos++] = "Depositado: $" + cantidadDepositar;
                        System.out.println("Depósito exitoso. Su nuevo saldo es: " + saldo);
                    } else {
                        System.out.println("Error: Cantidad no válida para depositar.");
                    }
                    break;

                case 5:
                    despedirse();
                    break;
                    
                default:
                    System.out.println("Opción no válida, ingrese una opción correcta.");
            }
        }

        scanner.close();
    }

    private static void mostrarMenu() {
        System.out.println("Bienvenido al cajero automático ATM, Elija una opción:");
        System.out.println("OPCION 1: Extraer Dinero");
        System.out.println("OPCION 2: Consultar Saldo");
        System.out.println("OPCION 3: Ver últimos movimientos realizados");
        System.out.println("OPCION 4: Depositar Dinero");
        System.out.println("OPCION 5: Salir");
        System.out.print("Su Opción: ");
    }

    private static void despedirse() {
        System.out.println("Gracias por utilizar nuestro cajero automático. ¡Hasta luego!");
    }

    private static void mostrarSaldo(int saldo) {
        System.out.println("Su saldo actual es: $" + saldo);
    }

    private static void recorrerMovimientos(String[] movimientos, int indiceMovimientos) {
        System.out.println("Últimos movimientos:");
        for (int i = 0; i < indiceMovimientos; i++) {
            System.out.println(movimientos[i]);
        }
    }
}
