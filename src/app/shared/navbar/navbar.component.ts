import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{
  userLogged: boolean=false;
  usernombre: string='';
  rol: string = "";
  user: any[]=[];
  user$!: Observable<any[]>
  userSuscripcion!: any;

  constructor(public _AuthService: AuthService) {
    var dataSesion : any = JSON.parse(localStorage.getItem('session')!);
    this.userLogged = dataSesion?.activa;
    this.usernombre = dataSesion?.usuario.nombre + ' ' + dataSesion?.usuario.apellido;
    this.rol = dataSesion?.usuario.rol == 2 ? 'Administrador:  ':'Alumno:  '
  }

  logedOff(){
    this._AuthService.CerrarSesion();
  }

  ngOnInit(): void {
    this.user$=this._AuthService.getSesion()
    this.userSuscripcion = this.user$.subscribe((alums:any[])=>{
      this.user = alums;
    });
  }
  ngOnDestroy(): void {
    this.userSuscripcion.unsubscribe();
  }

}
