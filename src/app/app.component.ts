import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mypet3';
  
  public home: boolean = true;
  public mascotas: boolean = true;
  public servicios: boolean = true;
	public conocenos: boolean = true;
  public tabla: boolean = true;
   public tablaAlumnos: boolean = true;

  ocultarComponenteH(value: boolean){
  	this.home = value;
  }

  ocultarComponenteM(value: boolean){
  	this.mascotas = value;
  }

  ocultarComponenteS(value: boolean){
  	this.servicios = value;
  }

  ocultarComponenteC(value: boolean){
  	this.conocenos = value;
  }
  ocultarComponenteT(value: boolean){
    this.tabla = value;
  }
  ocultarComponenteTA(value: boolean){
    this.tablaAlumnos = value;
  }
}
