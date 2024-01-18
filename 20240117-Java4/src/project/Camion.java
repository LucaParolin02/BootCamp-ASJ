package project;

public class Camion extends Automovil {
	private int cargaMax;
	
	public Camion(int anio, String marca, String color,int cargaMax) {
		super(anio, marca, color);
		this.cargaMax = cargaMax;
		
	}

	public int getCargaMax() {
		return cargaMax;
	}

	public void setCargaMax(int cargaMax) {
		this.cargaMax = cargaMax;
	}
	
	
	

}
