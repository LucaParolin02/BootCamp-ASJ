package project;

import java.util.Scanner;

public class example {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.print("Ingrese cantidad de series: ");
		int myInt1 = scanner.nextInt();

		// functions.ifElseEj(myInt1);

		// functions.firstMultiples(myInt1);
	
		if (!functions.validateQ(myInt1)) {
            scanner.close();
        } else {
            for (int i = 0; i < myInt1; i++) {
                System.out.println("Vuelta numero: " + (i + 1));
                System.out.println("Primer numero:");
                int a = scanner.nextInt();
                System.out.println("Segundo numero:");
                int b = scanner.nextInt();
                System.out.println("Tercer numero:");
                int n = scanner.nextInt();
                
                if (!functions.validateParams(a, b, n)) {
                    scanner.close();
                    return; 
                }
                functions.loops(a, b, n);
            }
        }
        	
        scanner.close();
	}

}
