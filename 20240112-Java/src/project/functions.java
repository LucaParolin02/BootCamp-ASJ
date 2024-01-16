package project;

public class functions {
	
    public static void ifElseEj(int n) {
        if (n < 0 || n > 100) {
            System.out.println("The number is not in the range");
        } else if (n % 2 != 0) {
            System.out.println("Weird");
        } else if (n >= 2 && n <= 5) {
            System.out.println("Not Weird");	
        } else if (n >= 6 && n <= 20) {
            System.out.println("Weird");
        } else {
            System.out.println("Not Weird");
         }      
    }
    
    public static void firstMultiples(int n) {
    	if (n < 2 || n > 20) {
            System.out.println("The number is not in the range");
        } else {
        	for (int i = 1; i <= 10; i++) {
                int result = n * i;
                System.out.println(n + " x " + i + " = " + result);
        	}
        } 	
    }
    
    public static void loops(int a, int b , int n) {
        int result = a;
        for (int j = 0; j < n; j++) {
        	result += (Math.pow(2, j) * b);
        	System.out.print(result + " ");
        }
        System.out.println();
    }
    
    public static boolean validateQ(int q) {
    	if (q < 0 || q > 500) {
            System.out.println("La cantidad de series debe estar entre 0 y 500. Saliendo del programa.");
            return false;
        }
    	return true;
    }
    
    public static boolean validateParams(int a,int b , int n) {
        if (a < 0 || a > 50) {
            System.out.println("El primer numero debe estar entre 0 y 50. Saliendo del programa.");
            return false; 
        }else if (b < 0 || b > 50) {
            System.out.println("El segundo numero debe estar entre 0 y 50. Saliendo del programa.");
            return false;  
        } else  if (n < 1 || n > 15) {
            System.out.println("El tercer numero debe estar entre 1 y 15. Saliendo del programa");
            return false;  
        }
        return true;
    }
}

