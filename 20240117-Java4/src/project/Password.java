package project;

public class Password {
	private int longitud;
	private String contraseña;
	
	
	public Password() {	
		this.longitud = 8;
        generarPassword();

	}
	
	public Password(int longitud) {
		this.longitud = longitud;
        generarPassword();

	}
	
	public boolean esFuerte() {
        int mayusculas = 0;
        int minusculas = 0;
        int numeros = 0;

        for (int i = 0; i < contraseña.length(); i++) {
            char caracter = contraseña.charAt(i);

            if (Character.isUpperCase(caracter)) {
                mayusculas++;
            } else if (Character.isLowerCase(caracter)) {
                minusculas++;
            } else if (Character.isDigit(caracter)) {
                numeros++;
            }
        }

        return mayusculas > 2 && minusculas > 1 && numeros > 5;
    }
	
    public void generarPassword() {
        StringBuilder password = new StringBuilder();
        for (int i = 0; i < this.longitud; i++) {
            int tipoCaracter = (int) (Math.random() * 3);

            switch (tipoCaracter) {
                case 0:
                    password.append((char) ((int) 'A' + Math.random() * 26));
                    break;
                case 1:
                    password.append((char) ((int) 'a' + Math.random() * 26));
                    break;
                case 2:
                    password.append((char) ((int) '0' + Math.random() * 10));
                    break;
            }
        }
        contraseña = password.toString();
    }
    
    public String getContraseña() {
        return contraseña;
    }

    public int getLongitud() {
        return longitud;
    }

    public void setLongitud(int longitud) {
        this.longitud = longitud;
        generarPassword();
    }
	
}
