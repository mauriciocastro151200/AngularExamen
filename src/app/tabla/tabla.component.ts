import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Inventario } from '../model/inventario';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements OnInit, DoCheck, OnDestroy{

	//Arreglo
	public inventarios: Array<Inventario>;

	public texto:string;
	constructor(){
		this.texto = "Variable dentro del constructor";
		this.inventarios =  [
 new Inventario(1001, 'Pelota para Perro', 
				        'Marlo Dogs', 'Rojo452',
				         50.00, 18),
			new Inventario(1002, 'Cojín para perro', 
				        'Marlo Dogs', 'Sintetico/Blanco',
				         149.90, 0),
			new Inventario(1003, 'Comida para gato', 
				        'Xuxo Shops', 'Genérico',
				        34.50, 58),
			new Inventario(1004, 'Shampoo Anti-Olor', 
				        'Bad Bone', 'RHS5442',
				        78.20, 5),
			new Inventario(1005, 'Rueda para Hamster', 
				        'Le Perré', 'Plastico356',
				        130.00, 0)];
	}
	//Hook o evento de ciclo de vida
	//Este evento se ejecuta al cargar el componente
	ngOnInit(){
		console.log("OnInit Inventario ejecutado");
	}

	//El hook DoCheck
	//Este se ejecuta cada que se detecta un cambio en la interfaz
	ngDoCheck(){
		console.log("DoCheck Inventario ejecutado");
	}

	//Evento OnDestroy
	//Se ejecuta una vez que se elimine o finalice un componente
	ngOnDestroy(){
		console.log("Se ocultó el componente Inventario");
	}
}
