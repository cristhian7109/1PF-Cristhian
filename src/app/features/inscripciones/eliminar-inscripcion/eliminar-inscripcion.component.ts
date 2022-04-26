import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { InscripcionService } from 'src/app/core/services/inscripcion.service';

@Component({
  selector: 'app-eliminar-Inscripcion',
  templateUrl: './eliminar-Inscripcion.component.html',
  styleUrls: ['./eliminar-Inscripcion.component.css']
})
export class EliminarInscripcionComponent implements OnInit {

  @Input() modal?: string;
  @Input() id?: number;
  @Output() closeModalevent = new EventEmitter<string>();

  constructor(private _InscripcionService:InscripcionService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeModalevent.emit()
  } 

  eliminarInscripcion(id:number){
    this._InscripcionService.eliminarInscripcion(id)
    this.closeModal()
  }

}
