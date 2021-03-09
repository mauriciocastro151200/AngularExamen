import { Component, OnInit, DoCheck, OnDestroy  } from '@angular/core';
import { Alumnos } from '../model/alumnos';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit, DoCheck, OnDestroy{

  //Arreglo
	public alumno: Array<Alumnos>;

	public texto:string;
	constructor(){
		this.texto = "Variable dentro del constructor";
		this.alumno =  [
			new Alumnos(19002020, 'Cristian Jeúsu', 
				        'Aguayo', 'Estrada',
				         'DSM501', 7.4),
			new Alumnos(19002021, 'Gerson Jireh', 
				        'Torres', 'Morales',
				         'DSM502', 8.6),
			new Alumnos(19002022, 'Raúl', 
				        'Martínez', 'Carranco',
				        'DSM503', 9.2),
			new Alumnos(19002023, 'Brandon Gustavo', 
				        'Mlagon', 'González',
				        'DSM504', 7.5),
			new Alumnos(19002024, 'Angel Mauricio', 
				        'Castro', 'Cabrera',
				        'DSM505', 7.2)];
	}
	//Hook o evento de ciclo de vida
	//Este evento se ejecuta al cargar el componente
	ngOnInit(){
		console.log("OnInit Alumnos ejecutado");
	}

	//El hook DoCheck
	//Este se ejecuta cada que se detecta un cambio en la interfaz
	ngDoCheck(){
		console.log("DoCheck Alumnos ejecutado");
	}

	//Evento OnDestroy
	//Se ejecuta una vez que se elimine o finalice un componente
	ngOnDestroy(){
		console.log("Se ocultó el componente Alumnos");
	}
}
