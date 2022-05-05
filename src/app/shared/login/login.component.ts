import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/interfaces/usuario';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Output() logedOn: EventEmitter<string> = new EventEmitter<string>();

  formGroup:FormGroup = new FormGroup({
    usuario:new FormControl('',[Validators.required]),
    contrasena:new FormControl('',[Validators.required, Validators.minLength(8)])
  })

  modalClass:string="open"
  typepass:string="password"
  incorrecto:boolean=false
  constructor(public fb: FormBuilder,
    private authService: AuthService) { }

  mostrarContra(){
    if(this.typepass==="password"){
      this.typepass="text"
    }else{
      this.typepass="password"
    }
  }

  onSubmit(usuario:any,contrasena:any){
    this.incorrecto=false
      // this.closeModal()
      this.authService
      .IniciarSesion(usuario.value, contrasena.value)
      .subscribe((data: Usuario[]) => {
        if (data.length === 1) {
          console.log('Usuario logueado exitosamente', data);
          this.authService.establecerSesion(true, data[0]);
        } else {
          console.log('Error de autenticación');
        }
      });
  }
  ngOnInit(): void {
  }
}
