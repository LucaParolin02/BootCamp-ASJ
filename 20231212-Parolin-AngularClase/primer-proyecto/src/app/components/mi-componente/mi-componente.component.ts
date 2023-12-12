import { Component } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.css'
})
export class MiComponenteComponent {
  titulo = "este es el titulo de mi-componente";
  
  num = 0;
  generarNumero(){
    this.num = Math.round(Math.random() * 10 );
  }

  incrementar(){
    this.num += 1;
  }

  decrementar(){
    this.num -= 1;
  }
}
