import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CursoService } from 'src/app/core/services/cursos.service';
import { CursosComponent } from '../cursos.component';

@Component({
  selector: 'app-eliminar-curso',
  templateUrl: './eliminar-curso.component.html',
  styleUrls: ['./eliminar-curso.component.css']
})
export class EliminarCursoComponent implements OnInit {

  @Input() modal?: string;
  @Input() curso!: any;
  @Output() closeModalevent = new EventEmitter<string>();

  constructor(private _cursoService:CursoService,
    private _mytable: CursosComponent) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeModalevent.emit()
  } 

  eliminarCurso(curso:any){
    this._cursoService.eliminarCurso(curso).subscribe((resp: any) => {
      setTimeout(() => {
        this._mytable.myTable.renderRows();
      }, 300);
    });
    this.closeModal()
  }

}
