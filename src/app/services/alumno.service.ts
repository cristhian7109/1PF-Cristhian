import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  listAlumno: Alumno[] = [
    {id:10, nombre: "Samir Jose", apellido: "Gonzales Avila", sexo: "Masculino", promedio: 15,edad:21},
    {id:9, nombre: "Claudia Helena", apellido: "Caro Avila", sexo: "Femenino", promedio: 18,edad:25},
    {id:8, nombre: "Juan Andre", apellido: "Perez Gomez", sexo: "Masculino", promedio: 16,edad:23},
    {id:7, nombre: "Mario Carlos", apellido: "Manrrique Contreras", sexo: "Masculino", promedio: 10,edad:21},
    {id:6, nombre: "Jennifer Concepcion", apellido: "Valles Arellano", sexo: "Femenino", promedio: 16,edad:22},
    {id:5, nombre: "Maria Nuria", apellido: "Ariza de-Los-Santos", sexo: "Femenino", promedio: 18,edad:24},
    {id:4, nombre: "Ramon Alain", apellido: "Gonzales Roca", sexo: "Masculino", promedio: 13,edad:22},
    {id:3, nombre: "Alexander Matias", apellido: "Chico Borja", sexo: "Masculino", promedio: 14,edad:25},
    {id:2, nombre: "Debora Naroa", apellido: "Sans Benitez", sexo: "Femenino", promedio: 12,edad:23},
    {id:1, nombre: "Sagrario Aurea", apellido: "Pons Castellano", sexo: "Femenino", promedio: 74,edad:20},
  ];
  constructor() { }

  getAlumno(){
    return this.listAlumno.slice()  
  }

  eliminarAlumno(index: number){
    this.listAlumno.splice(index,1)
  }

  agregarAlumno(alumno:Alumno){
    this.listAlumno.unshift({
      id:this.listAlumno.length+1,
      nombre:alumno.nombre,
      apellido:alumno.apellido,
      sexo:alumno.sexo,
      edad:alumno.edad,
      promedio:alumno.promedio
    })
  }
  modificarAlumno(alumno:Alumno){
    console.log(alumno);
    this.listAlumno[alumno.id] = alumno
    // this.listAlumno.unshift({
    //   id:this.listAlumno.length+1,
    //   nombre:alumno.nombre,
    //   apellido:alumno.apellido,
    //   sexo:alumno.sexo,
    //   edad:alumno.edad,
    //   promedio:alumno.promedio
    // })
  }
}
