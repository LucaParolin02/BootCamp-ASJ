package cajero;

import java.util.Random;

public class ejercicioSiete {
    public static void main(String[] args) {
        int numeroPersonas = 10;
        int[] sexos = new int[numeroPersonas];
        int[] trabaja = new int[numeroPersonas];
        int[] sueldos = new int[numeroPersonas];

        generarDatosAleatorios(sexos, trabaja, sueldos);

        calcularPorcentajesYPromedios(sexos, trabaja, sueldos);
    }

    private static void generarDatosAleatorios(int[] sexos, int[] trabaja, int[] sueldos) {
        Random rand = new Random();

        for (int i = 0; i < sexos.length; i++) {
            sexos[i] = rand.nextInt(2) + 1;
            trabaja[i] = rand.nextInt(2) + 1;
            sueldos[i] = (trabaja[i] == 1) ? rand.nextInt(1401) + 600 : 0;
        }
    }

    private static void calcularPorcentajesYPromedios(int[] sexos, int[] trabaja, int[] sueldos) {
        int totalHombres = 0;
        int totalMujeres = 0;
        int hombresTrabajan = 0;
        int mujeresTrabajan = 0;
        int sueldoHombresTrabajan = 0;
        int sueldoMujeresTrabajan = 0;

        for (int i = 0; i < sexos.length; i++) {
            if (sexos[i] == 1) {
                totalHombres++;
                if (trabaja[i] == 1) {
                    hombresTrabajan++;
                    sueldoHombresTrabajan += sueldos[i];
                }
            } else {
                totalMujeres++;
                if (trabaja[i] == 1) {
                    mujeresTrabajan++;
                    sueldoMujeresTrabajan += sueldos[i];
                }
            }
        }


        double porcentajeHombres = ((double) totalHombres / sexos.length) * 100;
        double porcentajeMujeres = ((double) totalMujeres / sexos.length) * 100;
        double porcentajeHombresTrabajan = ((double) hombresTrabajan / totalHombres) * 100;
        double porcentajeMujeresTrabajan = ((double) mujeresTrabajan / totalMujeres) * 100;


        double sueldoPromedioHombresTrabajan = (hombresTrabajan > 0) ? (double) sueldoHombresTrabajan / hombresTrabajan : 0;
        double sueldoPromedioMujeresTrabajan = (mujeresTrabajan > 0) ? (double) sueldoMujeresTrabajan / mujeresTrabajan : 0;


        System.out.println("Porcentaje de hombres: " + porcentajeHombres + "%");
        System.out.println("Porcentaje de mujeres: " + porcentajeMujeres + "%");
        System.out.println("Porcentaje de hombres que trabajan: " + porcentajeHombresTrabajan + "%");
        System.out.println("Porcentaje de mujeres que trabajan: " + porcentajeMujeresTrabajan + "%");
        System.out.println("Sueldo promedio de hombres que trabajan: $" + sueldoPromedioHombresTrabajan);
        System.out.println("Sueldo promedio de mujeres que trabajan: $" + sueldoPromedioMujeresTrabajan);
    }
}
