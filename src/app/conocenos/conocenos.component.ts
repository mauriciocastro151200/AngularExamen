import { Component, OnInit, DoCheck, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css']
})
export class ConocenosComponent implements OnInit, DoCheck, OnDestroy{

	//Hook o evento de ciclo de vida
	//Este evento se ejecuta al cargar el componente
	ngOnInit(){
		console.log("OnInit Conocenos ejecutado");
	}

	//El hook DoCheck
	//Este se ejecuta cada que se detecta un cambio en la interfaz
	ngDoCheck(){
		console.log("DoCheck Conocenos ejecutado");
	}

	//Evento OnDestroy
	//Se ejecuta una vez que se elimine o finalice un componente
	ngOnDestroy(){
		console.log("Se ocultó el componente Conocenos");
	}
}
