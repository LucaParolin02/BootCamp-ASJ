import { Component, OnInit} from '@angular/core';
import { ServicioUnoService } from '../../../services/servicio-uno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  tareaId: number | null = null;
  valorInput: string = '';

  constructor(private servicioUno: ServicioUnoService,private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tareaId = parseInt(params.get('id') || '0', 10);

      if (this.tareaId !== null) {
        this.servicioUno.getTareaByID(this.tareaId).subscribe((tarea) => {
          this.valorInput = tarea.nombre;
        });
      }
    });
  }

  editarTarea() {
    if (this.tareaId !== null) {
      const tareaActualizada = { id: this.tareaId, nombre: this.valorInput, completo: false, estado: false };
      this.servicioUno.updateTarea(tareaActualizada).subscribe(() => {
        this.router.navigate(['/proyecto-uno']);
      });
    }
  }
}
