import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/cursos';
import { map, Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly ApiUrl='https://6271c5d2c455a64564b7a629.mockapi.io';
  cursoSubject = new Subject<Curso[]>();
  
  constructor(
    private http: HttpClient
  ) { }

  getCurso(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.ApiUrl+'/curso');
  }

  eliminarCurso(curso: any){
    return this.http
      .delete(`${this.ApiUrl}/curso/${curso.id}`, curso)
      .pipe(
        tap(
          {
            next: () => {
              this.cursoSubject.next(curso);
            },
            error: (error) => console.log(error),
          }
        )
      );
  }

  agregarCurso(curso:any){
    return this.http.post(`${this.ApiUrl}/curso`, curso).pipe(
      tap(
        {
          next: () => {
            this.cursoSubject.next(curso);
          },
          error: (error) => console.log(error),
        }
      )
    );
  }
  modificarCurso(curso:any){
    return this.http
      .put(`${this.ApiUrl}/curso/${curso.id}`, curso)
      .pipe(
        tap(
          {
            next: () => {
              this.cursoSubject.next(curso)
            },
            error: (error) => console.log(error),
          }
        )
      );
  }
}
