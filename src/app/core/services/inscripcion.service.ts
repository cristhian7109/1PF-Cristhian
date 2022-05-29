import { Injectable } from '@angular/core';
import { Inscripcion } from '../interfaces/inscripcion';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  private readonly ApiUrl='https://6271c5d2c455a64564b7a629.mockapi.io';
  suscripcionSubject = new Subject<Inscripcion[]>();
  
  constructor(
    private http: HttpClient
  ) { }

  getInscripcion(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(this.ApiUrl+'/suscripcion');
  }
  getInscripcionXcurso(inscripcion: any): Observable<any> {
    return this.http.get<any>(
      `${this.ApiUrl}/suscripcion?idCurso=${inscripcion.idCurso}`
    );
  }
  getInscripcionXAlumno(idAlumno: number): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(
      `${this.ApiUrl}/suscripcion/${idAlumno}`
    );
  }
  eliminarInscripcion(suscripcion: any){
    return this.http
      .delete(`${this.ApiUrl}/suscripcion/${suscripcion.id}`, suscripcion)
      .pipe(
        tap(
          {
            next: () => {
              this.suscripcionSubject.next(suscripcion);
            },
            error: (error) => console.log(error),
          }
        )
      );
  }

  agregarInscripcion(suscripcion:any){
    return this.http.post(`${this.ApiUrl}/suscripcion`, suscripcion).pipe(
      tap(
        {
          next: () => {
            this.suscripcionSubject.next(suscripcion);
          },
          error: (error) => console.log(error),
        }
      )
    );
  }
  modificarInscripcion(suscripcion:any){
    return this.http
      .put(`${this.ApiUrl}/suscripcion/${suscripcion.id}`, suscripcion)
      .pipe(
        tap(
          {
            next: () => {
              this.suscripcionSubject.next(suscripcion)
            },
            error: (error) => console.log(error),
          }
        )
      );
  }
}
