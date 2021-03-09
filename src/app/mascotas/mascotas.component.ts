import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit, DoCheck, OnDestroy{

	//Hook o evento de ciclo de vida
	//Este evento se ejecuta al cargar el componente
	ngOnInit(){
		console.log("OnInit Mascotas ejecutado");
	}

	//El hook DoCheck
	//Este se ejecuta cada que se detecta un cambio en la interfaz
	ngDoCheck(){
		console.log("DoCheck Mascotas ejecutado");
	}

	//Evento OnDestroy
	//Se ejecuta una vez que se elimine o finalice un componente
	ngOnDestroy(){
		console.log("Se ocultó el componente Mascotas");
	}
}
