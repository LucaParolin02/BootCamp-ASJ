package project;

public class Automovil {
	private int anio;
	private String marca;
	private String color;
	
	public Automovil(int anio, String marca, String color) {
		super();
		this.anio = anio;
		this.marca = marca;
		this.color = color;
	}

	public int getAnio() {
		return anio;
	}

	public void setAnio(int anio) {
		this.anio = anio;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	
}
