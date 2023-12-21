import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  constructor(public service: UsersService) {}

  usuarios:any = [];

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.service.getUsers().subscribe((res) => {
      console.log("Respuesta del GET" , res);
      this.usuarios = res.data;
    });
  }

  create(form: NgForm){
      const usu = {
        name: form.value.name,
        job: form.value.job
      }

      this.service.createUser(usu).subscribe((res)=>{
        console.log(res);
        form.reset();
        this.list();
      });
  }

  delete(id: any){
    let confirmar = confirm('Desea eliminar al usuario ' + id + '?');
    if (confirmar){
      this.service.delete(id).subscribe((res)=>{
        console.log("Usuario Eliminado" , res);
        this.list();
      })
    }
  }


  edit(usuario: any){

  }
}
