import { Component } from "@angular/core";
import { InscripcionService } from 'src/app/core/services/inscripcion.service';
import { Observable, Subscription } from 'rxjs';
import { Inscripcion } from 'src/app/core/interfaces/inscripcion';

@Component({
    selector: 'app-contenido',
    templateUrl: './contenido.component.html',
    styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent{
    cursos!: Observable<Inscripcion[]>
    cursoSubscription!: Subscription;
    todayDate=new Date()

    constructor(private _inscripcionService: InscripcionService) { }

    ngOnInit(): void {
        this.cargarInscripcions()
      }

    cargarInscripcions(){
        this.cursos = this._inscripcionService.getInscripcionXAlumno(1);
        this.cursoSubscription = this._inscripcionService.suscripcionSubject.subscribe(
          () => {
            this.cursos = this._inscripcionService.getInscripcionXAlumno(1);
          }
        );
        
      }
}