export class Inventario{
	public idMercancia: number;
	public nombre: string;
	public marca: string;
	public modelo: string;
	public costo: number;	
	public existencias: number;

	constructor(idMercancia: number, nombre: string, marca: string, modelo: string, 
				costo: number, existencias: number){
		this.idMercancia = idMercancia;
		this.nombre = nombre;
		this.marca = marca;
		this.modelo = modelo;
		this.costo = costo;
		this.existencias = existencias;
	}
}