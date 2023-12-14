import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto-uno',
  templateUrl: './proyecto-uno.component.html',
  styleUrl: './proyecto-uno.component.css'
})
export class ProyectoUnoComponent {
    valorInput: string='';
    lista: { nombre: string; tachada: boolean; eliminado: boolean  }[] = [];
    listaCompletas : { nombre: string}[]=[];
    mostrarListas: boolean = false;

    agregarLista() {
      this.lista.push({ nombre: this.valorInput, tachada: false, eliminado: false });
      this.valorInput = "";
    }

    tachar(indice: number){
      this.lista[indice].tachada = !this.lista[indice].tachada;
    }

    eliminar(indice: number){
      this.lista.splice(indice,1);
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
