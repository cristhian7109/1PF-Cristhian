import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private readonly ApiUrl='https://6271c5d2c455a64564b7a629.mockapi.io';
  logueado!: any;

  usuarioSubject = new Subject<Usuario>();
  URL_SERVICIOS = this.ApiUrl;

  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any> {
    return this.http.get(`${this.ApiUrl}/Usuarios`);
  }

  agregarUsuarios(usuario: any) {
    return this.http
      .post(`${this.ApiUrl}/Usuarios`, usuario)
      .pipe(
        tap(
          // Log the result or error
          {
            next: () => {
              this.usuarioSubject.next(usuario);
            },
            error: (error) => console.log(error),
          }
        )
      );
  }

  editarUsuario(usuario: any) {
    return this.http
      .put(
        `${this.ApiUrl}/Usuarios/${usuario.idUsuario}`,
        usuario
      )
      .pipe(
        tap(
          // Log the result or error
          {
            next: () => {
              this.usuarioSubject.next(usuario);
            },

            error: (error) => console.log(error),
          }
        )
      );
  }

  eliminarUsuario(usuario: any) {
    return this.http
      .delete(
        `${this.ApiUrl}/Usuarios/${usuario.idUsuario}`,
        usuario
      )
      .pipe(
        tap(
          // Log the result or error
          {
            next: () => {
              this.usuarioSubject.next(usuario);
            },

            error: (error) => console.log(error),
          }
        )
      );
  }
}
