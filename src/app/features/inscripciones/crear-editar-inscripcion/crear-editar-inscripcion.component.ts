import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { Inscripcion } from 'src/app/core/interfaces/inscripcion';
import { InscripcionService } from 'src/app/core/services/inscripcion.service';
import { Observable } from 'rxjs';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { CursoService } from 'src/app/core/services/cursos.service';
import { InscripcionComponent } from '../inscripciones.component';

@Component({
  selector: 'app-crear-editar-inscripcion',
  templateUrl: './crear-editar-inscripcion.component.html',
  styleUrls: ['./crear-editar-inscripcion.component.css']
})
export class CrearEditarInscripcionComponent implements OnInit {

  @Input() modal?: string;
  @Input() seleccionado?: any;
  @Input() typemodal?: string;
  @Output() closeModalevent = new EventEmitter<string>();
  formGroup!:FormGroup;
  
  cursos$!: Observable<any>;
  alumnos$!: Observable<any>;

  constructor(
    private _inscripcionService:InscripcionService,
    private _alumnosService:AlumnoService,
    private _cursosService:CursoService,
    public fb: FormBuilder,
    private _mytable: InscripcionComponent
    ) { 
      this.formGroup = fb.group({
        idAlumno: new FormControl('', [Validators.required]),
        idCurso: new FormControl('', [Validators.required]),
      });
  }

  ngOnInit(): void {
    this.cursos$ = this._cursosService.getCurso();
    this.alumnos$ = this._alumnosService.getAlumno();
    // this.formGroup.get('idCurso')?.setValue(this.seleccionado.idCurso)
    // this.formGroup.get('idAlumno')?.setValue(this.seleccionado.idAlumno)
  }

  closeModal() {
    this.closeModalevent.emit()
  } 

  agregarInscripcion(Curso:any,Alumno:any){
    console.log(Curso);
    
    const inscripcion: Inscripcion = {
      id:0,
      idCurso:Curso.value,
      idAlumno:Alumno.value,
      nombreCurso:Curso.triggerValue,
      nombreAlumno:Alumno.triggerValue
    }
    if(this.typemodal==="add"){
      this._inscripcionService.agregarInscripcion(inscripcion).subscribe((resp: any) => {
        setTimeout(() => {
          this._mytable.myTable.renderRows();
        }, 300);
      });
    }else{
      this._inscripcionService.modificarInscripcion({...inscripcion,id:this.seleccionado.id}).subscribe((resp: any) => {
        setTimeout(() => {
          this._mytable.myTable.renderRows();
        }, 300);
      });
    }
    
    this.closeModal()
  }
}
