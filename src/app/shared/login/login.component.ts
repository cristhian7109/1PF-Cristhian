import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  modalClass:string="closed"
  typepass:string="password"
  incorrecto:boolean=false
  constructor() { }

  openModal() {
    this.modalClass= 'open'
  } 
  closeModal() {
    this.modalClass= 'closed'
  } 
  mostrarContra(){
    if(this.typepass==="password"){
      this.typepass="text"
    }else{
      this.typepass="password"
    }
  }

  onSubmit(usuario:any,contrasena:any){
    this.incorrecto=false
    if(usuario.value==="admin" && contrasena.value==="admin123"){
      this.closeModal()
      this.logedOn.emit(usuario.value)
    }else{
      this.incorrecto=true
    }
  }
  ngOnInit(): void {
  }
}
