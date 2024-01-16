package cajero;

import java.util.Scanner;

public class ejercicioOcho {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Ingrese el texto a codificar:");
        String textoOriginal = scanner.nextLine();

        System.out.println("Ingrese el valor de cambio (n):");
        int valorCambio = scanner.nextInt();

        String textoCodificado = cifrarCesar(textoOriginal, valorCambio);

        System.out.println("Texto codificado: " + textoCodificado);
        
        scanner.close();
    }

    private static String cifrarCesar(String texto, int valorCambio) {
        StringBuilder resultado = new StringBuilder();

        for (int i = 0; i < texto.length(); i++) {
            char caracter = texto.charAt(i);

            if (Character.isLetter(caracter)) {
                char base = Character.isLowerCase(caracter) ? 'a' : 'A';
                resultado.append((char) ((caracter - base + valorCambio) % 26 + base));
            } else {
                resultado.append(caracter);
            }
        }

        return resultado.toString();
    }

}
