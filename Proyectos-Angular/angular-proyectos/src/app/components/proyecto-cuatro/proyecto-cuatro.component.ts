import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto-cuatro',
  templateUrl: './proyecto-cuatro.component.html',
  styleUrl: './proyecto-cuatro.component.css'
})
export class ProyectoCuatroComponent {

  nombre = 'luca';
  apellido = 'ParOliN';
  precio = 44554.22;
  fecha = new Date();

  numeros=[ 1,2,3,4,5,6,7,8,9,10,11,12];
}
