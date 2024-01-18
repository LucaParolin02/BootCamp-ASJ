package project;

public class EjercicioUno {

	private int num1;
	private int num2;
	
	public EjercicioUno(int num1, int num2) {
		this.num1 = num1;
		this.num2 = num2;
	}

	public int getNum1() {
		return num1;
	}

	public void setNum1(int num1) {
		this.num1 = num1;
	}

	public int getNum2() {
		return num2;
	}

	public void setNum2(int num2) {
		this.num2 = num2;
	}
	
	public int sumar() {
		return this.num1+this.num2;
	}
	
	public int restar() {
		return this.num1-this.num2;
	}
	
	public int multiplicar() {
		return this.num1*this.num2;
	}
	
	@SuppressWarnings("null")
	public int dividir() {
		if (this.num2 != 0) {
            return this.num1 / this.num2;
        } else {
            System.out.println("Error: No se puede dividir por cero.");
            return (Integer) null;
        }
	}
}
