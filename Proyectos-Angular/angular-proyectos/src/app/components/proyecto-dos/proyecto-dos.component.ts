import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto-dos',
  templateUrl: './proyecto-dos.component.html',
  styleUrls: ['./proyecto-dos.component.css']
})
export class ProyectoDosComponent {
  personajes: { nombre: string; imagen: string; profesion: string }[] = [];
  miNombre: string = '';
  miImagen: string = '';
  miProfesion: string = '';

  enviar() {
    const nuevoPersonaje = { nombre: this.miNombre, imagen: this.miImagen, profesion: this.miProfesion };
    this.personajes.push(nuevoPersonaje);
    this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.miNombre = '';
    this.miImagen = '';
    this.miProfesion = '';
  }
}
