package project;

public class Cuenta {
	private String titular;
	private double cantidad;
	
	
	public Cuenta(String titular) {
		this.titular = titular;
		this.cantidad = 0.0;
	}
	
    public Cuenta(String titular, double cantidad) {
        this.titular = titular;
        if (cantidad >= 0) {
            this.cantidad = cantidad;
        } else {
            this.cantidad = 0.0;
        }
    }

	public String getTitular() {
		return titular;
	}


	public void setTitular(String titular) {
		this.titular = titular;
	}


	public double getCantidad() {
		return cantidad;
	}


	public void setCantidad(double cantidad) {
		this.cantidad = cantidad;
	}


	@Override
	public String toString() {
		return "Cuenta [titular=" + titular + ", cantidad=" + cantidad + "]";
	}
	
	public void ingresar(double cant) {
		if (cant > 0) {
			this.cantidad += cant;
			System.out.println("Su nueva cantidad es: " + this.cantidad);
		}
	}
	
    public void retirar(double cant) {
        if (cant > 0) {
            if (this.cantidad - cant < 0) {
                this.cantidad = 0;
            } else {
                this.cantidad -= cant;
            }
            System.out.println("Su nueva cantidad es: " + this.cantidad);
        }
    }
	
	
	
}
