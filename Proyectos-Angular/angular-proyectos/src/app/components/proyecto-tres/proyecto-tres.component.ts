import { Component, OnInit } from '@angular/core';
import { ServicioTresService } from '../../services/servicio-tres.service';

@Component({
  selector: 'app-proyecto-tres',
  templateUrl: './proyecto-tres.component.html',
  styleUrl: './proyecto-tres.component.css'
})
export class ProyectoTresComponent implements OnInit {
  datos: any = [];
  personajes: any = [];

  constructor(public servicio: ServicioTresService){}

  ngOnInit(): void {
    this.personajes = this.servicio.getDataAPI().subscribe((data) => {
      this.personajes = data;
      console.log(data)
    })
  }

}
