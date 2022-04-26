import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CursoService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-eliminar-curso',
  templateUrl: './eliminar-curso.component.html',
  styleUrls: ['./eliminar-curso.component.css']
})
export class EliminarCursoComponent implements OnInit {

  @Input() modal?: string;
  @Input() id?: number;
  @Output() closeModalevent = new EventEmitter<string>();

  constructor(private _cursoService:CursoService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeModalevent.emit()
  } 

  eliminarCurso(id:number){
    this._cursoService.eliminarCurso(id)
    this.closeModal()
  }

}
