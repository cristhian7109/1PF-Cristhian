import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/alumnos';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-crear-editar-alumno',
  templateUrl: './crear-editar-alumno.component.html',
  styleUrls: ['./crear-editar-alumno.component.css']
})
export class CrearEditarAlumnoComponent implements OnInit {

  @Input() modal?: string;
  @Input() seleccionado?: any;
  @Input() typemodal?: string;
  @Output() closeModalevent = new EventEmitter<string>();
  formGroup:FormGroup = new FormGroup({
    nombre:new FormControl('',[Validators.required]),
    apellido:new FormControl('',[Validators.required]),
    sexo:new FormControl('',[Validators.required]),
    edad:new FormControl('',[Validators.required]),
    promedio:new FormControl('',[Validators.required])
  })
  
  constructor(private _alumnoService:AlumnoService) { 
  }

  ngOnInit(): void {
    this.formGroup.get('nombre')?.setValue(this.seleccionado.nombre)
    this.formGroup.get('apellido')?.setValue(this.seleccionado.apellido)
    this.formGroup.get('sexo')?.setValue(this.seleccionado.sexo)
    this.formGroup.get('edad')?.setValue(this.seleccionado.edad)
    this.formGroup.get('promedio')?.setValue(this.seleccionado.promedio)
  }

  closeModal() {
    this.closeModalevent.emit()
  } 

  agregarAlumno(nombre:any,apellido:any,sexo:any,edad:any,promedio:any){
    
    const alumno: Alumno = {
      id:0,
      nombre:nombre.value,
      apellido:apellido.value,
      sexo:sexo.value,
      edad:edad.value,
      promedio:promedio.value
    }
    if(this.typemodal==="add"){
      this._alumnoService.agregarAlumno(alumno)
    }else{
      this._alumnoService.modificarAlumno({...alumno,id:this.seleccionado.id})
    }
    
    this.closeModal()
  }
}
