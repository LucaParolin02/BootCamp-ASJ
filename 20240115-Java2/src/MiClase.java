import java.util.Scanner;

public class MiClase {

	public static void main(String[] args) {	
//		System.out.println(" INT MIN:" + Integer.MIN_VALUE + "INT MAX:"+ Integer.MAX_VALUE);
//		System.out.println("DOBLE MIN:" + Double.MIN_VALUE + "DOUBLE MAX:" + Double.MAX_VALUE);
//		System.out.println("BYTE MIN:" + Byte.MIN_VALUE + "BYTE MAX:" + Byte.MIN_VALUE);
//		System.out.println("FLOAT MIN:" + Float.MIN_VALUE + "FLOAT MAX:" + Float.MIN_VALUE);
//		System.out.println("LONG MIN:" + Long.MIN_VALUE + "LONG MAX:" + Long.MIN_VALUE);
//		System.out.println("SHORT MIN:" + Short.MIN_VALUE + "SHORT MAX:" + Short.MIN_VALUE);
//		int resultado = (int) (a/b);
//		System.out.println(resultado);
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingrese la palabra");
		String myPalabra = scanner.nextLine();
		scanner.close();
		
		if(validateWord(myPalabra)) {
			System.out.println(charactersAscii(myPalabra));
		}
		
	}

	public static StringBuilder charactersAscii(String palabra) {
		StringBuilder resultado = new StringBuilder();
		char c;
		for (int i = 0 ; i < palabra.length() ; i++) {
			c = palabra.charAt(i);
			resultado.append((int) c + " ");
		}
		return resultado;
	}
	
	public static boolean validateWord(String palabra) {
	    char c;
	    for (int i = 0; i < palabra.length(); i++) {
	        c = palabra.charAt(i);
	        if (c >= '0' && c <= '9') {
	            System.out.println("Ingrese una palabra sin números");
	            return false;
	        }
	    }
	    return true;
	}
}
