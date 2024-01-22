// proyecto-uno.component.ts

import { Component, OnInit } from '@angular/core';
import { ServicioUnoService } from '../../services/servicio-uno.service';
import { list } from '../../interfaces/list';

@Component({
  selector: 'app-proyecto-uno',
  templateUrl: './proyecto-uno.component.html',
  styleUrls: ['./proyecto-uno.component.css']  
})
export class ProyectoUnoComponent implements OnInit {

  valorInput: string = '';
  lista: list[] = [];
  filteredLista: list[] = [];
  listaEliminados: list[] = [];
  mostrarListas: boolean = false;
  mostrarCompletas: boolean = false;  
  mostrarIncompletas: boolean = false;  
  mostrarEliminadas: boolean = false;

  constructor(private servicioUno: ServicioUnoService) {}

  ngOnInit(): void {
    this.loadList(); 
  }

  private loadList() {
    this.servicioUno.getList().subscribe((lista) => {
      this.lista = lista;
      this.filteredList();
      this.loadEliminadas();
    });
  }

  private loadEliminadas() {
    this.servicioUno.getEliminadas().subscribe((eliminadas) => {
        this.listaEliminados = eliminadas;
    });
}

  public agregarLista() {
    const confirmacion = window.confirm(`¿Estás seguro de añadir la tarea "${this.valorInput}"?`);
  
    if (confirmacion) {
      const nuevaTarea: list = { id: 0, nombre: this.valorInput, completo: false, estado: false };
  
      this.servicioUno.addTarea(nuevaTarea).subscribe((tarea) => {
        this.valorInput = '';
        this.lista.push(tarea);
        this.filteredList();
        this.loadList();
      });
    }
  }

  public tachar(indice: number) {
    const tarea = this.lista[indice];
    tarea.completo = !tarea.completo;
    this.servicioUno.updateTarea(tarea).subscribe(() => {
      this.filteredList();
    });
  }

  public eliminar(indice: number) {
    const tarea = this.lista[indice];
    const confirmacion = window.confirm(`¿Estás seguro de eliminar la tarea "${tarea.nombre}"?`);
    if (confirmacion) {
      this.servicioUno.deleteTarea(tarea.id).subscribe(() => {
        this.lista.splice(indice, 1);
        this.filteredList();
        this.listaEliminados.push(tarea);
      });
    }
}

  public mostrarLista() {
    this.mostrarListas = !this.mostrarListas;
    this.filteredList();
    this.loadList();
  }

  public incompletasLista() {
    this.mostrarIncompletas = !this.mostrarIncompletas;
    this.filteredList();
  }

  public completasLista() {
    this.mostrarCompletas = !this.mostrarCompletas;
    this.filteredList();
  }

  public mostrarEliminados() {
    this.servicioUno.getEliminadas().subscribe((eliminadas) => {
        this.listaEliminados = eliminadas;
        this.mostrarEliminadas = !this.mostrarEliminadas;
    });
}

private filteredList(): void {
  if (this.mostrarListas) {
      this.filteredLista = this.lista.filter(tarea => !tarea.estado);
  } else if (this.mostrarIncompletas) {
      this.filteredLista = this.lista.filter(tarea => !tarea.completo && !tarea.estado);
  } else if (this.mostrarCompletas) {
      this.filteredLista = this.lista.filter(tarea => tarea.completo && !tarea.estado);
  }
}

}
