import { Component, OnInit, DoCheck, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck, OnDestroy{

	//Hook o evento de ciclo de vida
	//Este evento se ejecuta al cargar el componente
	ngOnInit(){
		console.log("OnInit Home ejecutado");
	}

	//El hook DoCheck
	//Este se ejecuta cada que se detecta un cambio en la interfaz
	ngDoCheck(){
		console.log("DoCheck Home ejecutado");
	}

	//Evento OnDestroy
	//Se ejecuta una vez que se elimine o finalice un componente
	ngOnDestroy(){
		console.log("Se ocultó el componente Home");
	}
}

