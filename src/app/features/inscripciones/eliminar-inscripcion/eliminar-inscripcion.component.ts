import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { InscripcionService } from 'src/app/core/services/inscripcion.service';
import { InscripcionComponent } from '../inscripciones.component';

@Component({
  selector: 'app-eliminar-inscripcion',
  templateUrl: './eliminar-inscripcion.component.html',
  styleUrls: ['./eliminar-inscripcion.component.css']
})
export class EliminarInscripcionComponent implements OnInit {

  @Input() modal?: string;
  @Input() seleccionado?: any;
  @Output() closeModalevent = new EventEmitter<string>();

  constructor(private _InscripcionService:InscripcionService,
    private _mytable: InscripcionComponent) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeModalevent.emit()
  } 

  eliminarInscripcion(data:any){
    this._InscripcionService.eliminarInscripcion(data).subscribe((resp: any) => {
      setTimeout(() => {
        this._mytable.myTable.renderRows();
      }, 300);
    });
    this.closeModal()
  }

}
