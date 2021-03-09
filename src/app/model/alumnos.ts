export class Alumnos{
	public idAlumno: number;
	public nombre: string;
	public apellidoP: string;
	public apellidoM: string;
	public grupo: string;	
	public promedio: number;

	constructor(idAlumno: number, nombre: string, apellidoP: string, 
			    apellidoM: string, grupo: string, promedio: number){
		this.idAlumno = idAlumno;
		this.nombre = nombre;
		this.apellidoP = apellidoP;
		this.apellidoM = apellidoM;
		this.grupo = grupo;
		this.promedio = promedio;
	}
}