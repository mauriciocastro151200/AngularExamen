import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { TablaComponent } from './tabla/tabla.component';
import { TablaAlumnosComponent } from './tabla-alumnos/tabla-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MascotasComponent,
    ServiciosComponent,
    ConocenosComponent,
    TablaComponent,
    TablaAlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
