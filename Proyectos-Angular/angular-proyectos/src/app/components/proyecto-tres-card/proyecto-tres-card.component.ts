import { Component, OnInit } from '@angular/core';
import { ServicioTresService } from '../../services/servicio-tres.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyecto-tres-card',
  templateUrl: './proyecto-tres-card.component.html',
  styleUrls: ['./proyecto-tres-card.component.css']
})
export class ProyectoTresCardComponent implements OnInit {
  personaje: any = [];
  idSeleccionado: string | null= '';

  constructor(public servicio: ServicioTresService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idSeleccionado = this.route.snapshot.paramMap.get('id');

    if(this.idSeleccionado != null ){
      this.servicio.getPersonajeAPI(parseInt(this.idSeleccionado)).subscribe((data) => {
        this.personaje = data;
      });
    }
  }
}
