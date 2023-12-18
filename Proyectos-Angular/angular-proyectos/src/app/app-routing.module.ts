import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectoUnoComponent } from './components/proyecto-uno/proyecto-uno.component';
import { ProyectoDosComponent } from './components/proyecto-dos/proyecto-dos.component';
import { ProyectoTresComponent } from './components/proyecto-tres/proyecto-tres.component';
import { ProyectoTresCardComponent } from './components/proyecto-tres-card/proyecto-tres-card.component';

const routes: Routes = [
  {path: 'proyecto-uno', component: ProyectoUnoComponent ,},
  {path: 'proyecto-dos', component: ProyectoDosComponent},
  {path: 'proyecto-tres',
  children:[
    {path:'card/:id', component: ProyectoTresCardComponent},
    {path:"", component: ProyectoTresComponent}
  ]},
  {path:'', component: ProyectoUnoComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'proyecto-uno'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
