import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';
import { ListasComponent } from './components/listas/listas.component';
import { MiNavbarComponent } from './components/mi-navbar/mi-navbar.component';
import { MiBodyComponent } from './components/mi-body/mi-body.component';
import { MiFooterComponent } from './components/mi-footer/mi-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    ListasComponent,
    MiNavbarComponent,
    MiBodyComponent,
    MiFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
