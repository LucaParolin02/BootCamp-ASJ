import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './components/proyetos/proyectos.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProyectoUnoComponent } from './components/proyecto-uno/proyecto-uno.component';
import { ProyectoDosComponent } from './components/proyecto-dos/proyecto-dos.component';
import { ProyectoTresComponent } from './components/proyecto-tres/proyecto-tres.component';
import { ProyectoTresCardComponent } from './components/proyecto-tres-card/proyecto-tres-card.component';
import { ServicioTresService } from './services/servicio-tres.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProyectosComponent,
    SidebarComponent,
    ProyectoUnoComponent,
    ProyectoDosComponent,
    ProyectoTresComponent,
    ProyectoTresCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServicioTresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
