import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumnos';
import { map, Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private readonly ApiUrl='https://6271c5d2c455a64564b7a629.mockapi.io';
  alumnoSubject = new Subject<Alumno[]>();
  
  constructor(
    private http: HttpClient
  ) { }

  getAlumno(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.ApiUrl+'/alumno');
  }
  getAlumnosAprobados(): Observable<Alumno[]>{
    return this.alumnoSubject.pipe(
      map(alums => alums.filter(alum => alum.promedio > 13))
    );
  }

  eliminarAlumno(alumno: any){
    return this.http
      .delete(`${this.ApiUrl}/alumno/${alumno.id}`, alumno)
      .pipe(
        tap(
          {
            next: () => {
              this.alumnoSubject.next(alumno);
            },
            error: (error) => console.log(error),
          }
        )
      );
  }

  agregarAlumno(alumno:any){
    return this.http.post(`${this.ApiUrl}/alumno`, alumno).pipe(
      tap(
        {
          next: () => {
            this.alumnoSubject.next(alumno);
          },
          error: (error) => console.log(error),
        }
      )
    );
  }
  modificarAlumno(alumno:any){
    return this.http
      .put(`${this.ApiUrl}/alumno/${alumno.id}`, alumno)
      .pipe(
        tap(
          {
            next: () => {
              this.alumnoSubject.next(alumno)
            },
            error: (error) => console.log(error),
          }
        )
      );
  }
}
