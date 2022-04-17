import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-aprobados',
  templateUrl: './aprobados.component.html',
  styleUrls: ['./aprobados.component.css']
})
export class AprobadosComponent implements OnInit, OnDestroy {

  aprobados: any[] = [];
  aprobados$!: Observable<any>;
  aprobadosSuscripcion!: any;

  constructor(private _alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.aprobados$=this._alumnoService.getAlumnosAprobados()
    this.aprobadosSuscripcion = this.aprobados$.subscribe((alums)=>{
      this.aprobados = alums;
    });
  }
  ngOnDestroy(): void {
    this.aprobadosSuscripcion.unsubscribe();
  }
}
