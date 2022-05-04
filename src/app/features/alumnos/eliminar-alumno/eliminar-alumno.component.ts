import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AlumnoService } from 'src/app/core/services/alumno.service';
import { AlumnosComponent } from '../alumnos.component';

@Component({
  selector: 'app-eliminar-alumno',
  templateUrl: './eliminar-alumno.component.html',
  styleUrls: ['./eliminar-alumno.component.css']
})
export class EliminarAlumnoComponent implements OnInit {

  @Input() modal?: string;
  @Input() alumno?: any;
  @Output() closeModalevent = new EventEmitter<string>();

  constructor(private _alumnoService:AlumnoService,
    private _mytable: AlumnosComponent) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeModalevent.emit()
  } 

  eliminarAlumno(alumno:any){
    console.log(alumno);
    
    this._alumnoService.eliminarAlumno(alumno).subscribe((resp: any) => {
      setTimeout(() => {
        this._mytable.myTable.renderRows();
      }, 300);
    });
    this.closeModal()
  }

}
