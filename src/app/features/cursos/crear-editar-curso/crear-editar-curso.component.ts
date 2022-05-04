import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Curso } from 'src/app/core/interfaces/cursos';
import { CursoService } from 'src/app/core/services/cursos.service';
import { CursosComponent } from '../cursos.component';

@Component({
  selector: 'app-crear-editar-curso',
  templateUrl: './crear-editar-curso.component.html',
  styleUrls: ['./crear-editar-curso.component.css']
})
export class CrearEditarCursoComponent implements OnInit {

  @Input() modal?: string;
  @Input() seleccionado?: any;
  @Input() typemodal?: string;
  @Output() closeModalevent = new EventEmitter<string>();
  formGroup:FormGroup = new FormGroup({
    nombre:new FormControl('',[Validators.required]),
    descripcion:new FormControl('',[Validators.required]),
    duracion:new FormControl('',[Validators.required])
  })
  
  constructor(private _cursoService:CursoService,
    private _mytable: CursosComponent) { 
  }

  ngOnInit(): void {
    this.formGroup.get('nombre')?.setValue(this.seleccionado.nombre)
    this.formGroup.get('descripcion')?.setValue(this.seleccionado.descripcion)
    this.formGroup.get('duracion')?.setValue(this.seleccionado.duracion)
  }

  closeModal() {
    this.closeModalevent.emit()
  } 

  agregarCurso(nombre:any,descripcion:any,duracion:any){
    
    const curso: Curso = {
      id:0,
      nombre:nombre.value,
      descripcion:descripcion.value,
      duracion:duracion.value
    }
    if(this.typemodal==="add"){
      this._cursoService.agregarCurso(curso).subscribe((resp: any) => {
        setTimeout(() => {
          this._mytable.myTable.renderRows();
        }, 300);
      });
    }else{
      this._cursoService.modificarCurso({...curso,id:this.seleccionado.id}).subscribe((resp: any) => {
        setTimeout(() => {
          this._mytable.myTable.renderRows();
        }, 300);
      });
    }
    
    this.closeModal()
  }
}
