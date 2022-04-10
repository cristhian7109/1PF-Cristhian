import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-eliminar-alumno',
  templateUrl: './eliminar-alumno.component.html',
  styleUrls: ['./eliminar-alumno.component.css']
})
export class EliminarAlumnoComponent implements OnInit {

  @Input() modal?: string;
  @Input() id?: number;
  @Output() closeModalevent = new EventEmitter<string>();

  constructor(private _alumnoService:AlumnoService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeModalevent.emit()
  } 

  eliminarAlumno(id:number){
    this._alumnoService.eliminarAlumno(id)
    this.closeModal()
  }

}
