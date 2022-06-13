import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  rol: number = 0;
  user: any[]=[];
  user$!: Observable<any[]>
  userSuscripcion!: any;

  constructor(public _AuthService: AuthService) {
    var dataSesion : any = JSON.parse(localStorage.getItem('sessionPFCristhian')!)
    this.rol = dataSesion?.usuario.rol
    console.log(this.rol);
    
  }

  ngOnInit(): void {
    this.user$=this._AuthService.getSesion()
    this.userSuscripcion = this.user$.subscribe((alums:any[])=>{
      this.user = alums;
    });
    console.log(this.user);
  }
  ngOnDestroy(): void {
    this.userSuscripcion.unsubscribe();
  }

}
