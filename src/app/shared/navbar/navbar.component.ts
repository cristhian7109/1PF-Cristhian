import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  userLogged: boolean=false;
  user: string='';

  constructor(public _AuthService: AuthService,private ruta: Router,public authService: AuthService) {
    var dataSesion : any = JSON.parse(localStorage.getItem('session')!);
    this.userLogged = dataSesion?.activa;
    this.user = dataSesion?.usuario.nombre + ' ' + dataSesion?.usuario.apellido;
  }

  logedOff(){
    this._AuthService.CerrarSesion();
  }

  ngOnInit(): void {
  }

}
