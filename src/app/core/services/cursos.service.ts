import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/cursos';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  listCurso: Curso[] = [
    {id:654, nombre: "JavaScript", descripcion: "JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web dinámicas. Permite a los programadores implementar funciones complejas en las páginas web para añadirles  más interactividad.",duracion:21},
    {id:357, nombre: "React", descripcion: "React.js o ReactJS es una biblioteca de JavaScript de código abierto, creada por un ingeniero de software de Facebook llamado Jordan Walk que se utiliza para crear interfaces de usuario específicamente para aplicaciones de una sola página",duracion:25},
    {id:632, nombre: "Vue", descripcion: "Vue es un marco para la creación de interfaces de usuario y es diferente de la mayoría de los marcos monolíticos, ya que ha sido creado para ofrecer una adaptabilidad óptima.",duracion:23},
    {id:687, nombre: "Angular", descripcion: "Angular es un marco de código abierto que se utiliza principalmente para el desarrollo de aplicaciones web de una sola página. Los desarrolladores pueden confiar en él para generar menús animados adecuados para páginas web HTML. ",duracion:21},
    {id:984, nombre: "TypeScript", descripcion: "TypeScript es otro de los 10 principales lenguajes de programación frontend y un superconjunto sintáctico de JavaScript. Cualquier código JavaScript se considera un código TypeScript válido, que se ejecuta en los navegadores como JS.  ",duracion:21},
    {id:732, nombre: "NodeJs", descripcion: "NodeJS es un entorno de código abierto (Open Source), multiplataforma y que ejecuta el código Javascript fuera de un navegador. ",duracion:22},
  ];
  listCursosPromise!:Promise<any>;
  listCursos$!:Observable<Curso[]>;

  constructor() {

    this.listCursos$ = new Observable((suscripcion)=>{
      if(this.listCurso.length > 0){
        suscripcion.next(this.listCurso)
        suscripcion.complete()
      }else{
        suscripcion.error("no hay cursos que enviar")
      }
    })

    this.listCursosPromise = new Promise((res,rej)=>{
      if(this.listCurso.length > 0){
        res(this.listCurso);
      }else{
        rej(this.listCurso);
      }
    });
   }

  getCurso(){
    return this.listCurso.slice()  
  }
  getCursoPromise(){
    return this.listCursosPromise
  }
  getCursoObservable(): Observable<Curso[]>{
    return this.listCursos$
  }

  eliminarCurso(index: number){
    this.listCurso.splice(index,1)
  }

  agregarCurso(curso:Curso){
    this.listCurso.unshift({
      id:Math.floor(Math.random() * (999 - 100)) + 100,
      nombre:curso.nombre,
      descripcion:curso.descripcion,
      duracion:curso.duracion
    })
  }
  modificarCurso(curso:Curso){
    this.listCurso[curso.id] = curso
  }
}
