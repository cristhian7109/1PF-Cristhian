import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumnos';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  listAlumno: Alumno[] = [
    {id:101, nombre: "Samir Jose", apellido: "Gonzales Avila", sexo: "Masculino", promedio: 15,edad:21},
    {id:102, nombre: "Claudia Helena", apellido: "Caro Avila", sexo: "Femenino", promedio: 18,edad:25},
    {id:103, nombre: "Juan Andre", apellido: "Perez Gomez", sexo: "Masculino", promedio: 16,edad:23},
    {id:121, nombre: "Mario Carlos", apellido: "Manrrique Contreras", sexo: "Masculino", promedio: 10,edad:21},
    {id:321, nombre: "Jennifer Concepcion", apellido: "Valles Arellano", sexo: "Femenino", promedio: 16,edad:22},
    {id:654, nombre: "Maria Nuria", apellido: "Ariza de-Los-Santos", sexo: "Femenino", promedio: 18,edad:24},
    {id:652, nombre: "Ramon Alain", apellido: "Gonzales Roca", sexo: "Masculino", promedio: 13,edad:22},
    {id:354, nombre: "Alexander Matias", apellido: "Chico Borja", sexo: "Masculino", promedio: 14,edad:25},
    {id:465, nombre: "Debora Naroa", apellido: "Sans Benitez", sexo: "Femenino", promedio: 12,edad:23},
    {id:387, nombre: "Sagrario Aurea", apellido: "Pons Castellano", sexo: "Femenino", promedio: 14,edad:20},
  ];
  listAlumnosPromise!:Promise<any>;
  listAlumnos$!:Observable<Alumno[]>;

  constructor() {

    this.listAlumnos$ = new Observable((suscripcion)=>{
      if(this.listAlumno.length > 0){
        suscripcion.next(this.listAlumno)
        suscripcion.complete()
      }else{
        suscripcion.error("no hay alumnos que enviar")
      }
    })

    this.listAlumnosPromise = new Promise((res,rej)=>{
      if(this.listAlumno.length > 0){
        res(this.listAlumno);
      }else{
        rej(this.listAlumno);
      }
    });
   }

  getAlumno(){
    return this.listAlumno.slice()  
  }
  getAlumnoPromise(){
    return this.listAlumnosPromise
  }
  getAlumnoObservable(): Observable<Alumno[]>{
    return this.listAlumnos$
  }
  getAlumnosAprobados(): Observable<Alumno[]>{
    return this.listAlumnos$.pipe(
      map(alums => alums.filter(alum => alum.promedio > 13))
    );
  }

  eliminarAlumno(index: number){
    this.listAlumno.splice(index,1)
  }

  agregarAlumno(alumno:Alumno){
    this.listAlumno.unshift({
      id:Math.floor(Math.random() * (999 - 100)) + 100,
      nombre:alumno.nombre,
      apellido:alumno.apellido,
      sexo:alumno.sexo,
      edad:alumno.edad,
      promedio:alumno.promedio
    })
  }
  modificarAlumno(alumno:Alumno){
    this.listAlumno[alumno.id] = alumno
  }
}
