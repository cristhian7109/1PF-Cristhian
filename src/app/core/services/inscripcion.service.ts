import { Injectable } from '@angular/core';
import { Inscripcion } from '../interfaces/inscripcion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  listInscripcion: Inscripcion[] = [
    {id:985, idCurso: 357, idAlumno: 652, nombreCurso: "React", nombreAlumno: "Ramon Alain"},
  ];
  listInscripcionsPromise!:Promise<any>;
  listInscripcions$!:Observable<Inscripcion[]>;

  constructor() {

    this.listInscripcions$ = new Observable((suscripcion)=>{
      if(this.listInscripcion.length > 0){
        suscripcion.next(this.listInscripcion)
        suscripcion.complete()
      }else{
        suscripcion.error("no hay inscripciones que enviar")
      }
    })

    this.listInscripcionsPromise = new Promise((res,rej)=>{
      if(this.listInscripcion.length > 0){
        res(this.listInscripcion);
      }else{
        rej(this.listInscripcion);
      }
    });
   }

  getInscripcion(){
    return this.listInscripcion.slice()  
  }
  getInscripcionPromise(){
    return this.listInscripcionsPromise
  }
  getInscripcionObservable(): Observable<Inscripcion[]>{
    return this.listInscripcions$
  }

  eliminarInscripcion(index: number){
    this.listInscripcion.splice(index,1)
  }

  agregarInscripcion(alumno:Inscripcion){
    this.listInscripcion.unshift({
      id:  Math.floor(Math.random() * (999 - 100)) + 100,
      idCurso:alumno.idCurso,
      idAlumno:alumno.idAlumno,
      nombreCurso:alumno.nombreCurso,
      nombreAlumno:alumno.nombreAlumno
    })
  }
  modificarInscripcion(alumno:Inscripcion){
    this.listInscripcion[alumno.id] = alumno
  }
}
