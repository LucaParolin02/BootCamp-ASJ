import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto-uno',
  templateUrl: './proyecto-uno.component.html',
  styleUrl: './proyecto-uno.component.css'
})
export class ProyectoUnoComponent {
    valor_input: string='';
    lista: { nombre: string; tachada: boolean; eliminado: boolean  }[] = [];
    listaCompletas : { nombre: string}[]=[];
    mostrarListas: boolean = false;

    agregarLista() {
      this.lista.push({ nombre: this.valor_input, tachada: false, eliminado: false });
      this.valor_input = "";
      this.mostrarListas = false;
    }

    tachar(indice: number){
      this.lista[indice].tachada = !this.lista[indice].tachada;
    }

    mostrarLista(){
      this.mostrarListas = !this.mostrarListas;
    }

    incompletasLista(){

    }

    completasLista(){

    }

    eliminadasLista(){

    }
}
