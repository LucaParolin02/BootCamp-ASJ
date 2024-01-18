package project;

import java.util.ArrayList;
import java.util.Iterator;

public class ArrayLists {

	public static void main(String[] args) {
		
		ArrayList<String> miLista = new ArrayList<String>();

		miLista.add("Hola");
		for (String palabras: miLista) {
			System.out.println(palabras);
		}
		
		miLista.add("Hola");
		miLista.add("Hola");
		miLista.add("Hola");
		
		System.out.println("hola" + miLista.get(0));
		
		miLista.remove(4);
		
		System.out.println(miLista.indexOf("Hola"));
		System.out.println(miLista.lastIndexOf("Hola"));
		
		//miLista.clear();
		miLista.isEmpty();
		
		Iterator<String> miIterador = miLista.iterator();
		
		while(miIterador.hasNext()) {
			String elem = miIterador.next();
			System.out.println(elem);
		}
		
	}

}
