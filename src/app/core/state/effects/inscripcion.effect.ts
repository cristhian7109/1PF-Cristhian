import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import {
  cargarInscripciones,
  cargarInscripcionesCurso,
  inscripcionesCargadas,
  inscripcionesCargadasCurso,
} from '../actions/inscripcion.actions';
import { InscripcionService } from '../../services/inscripcion.service';

@Injectable()
export class InscripcionesEffects {
  cargarInscripcionesEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(cargarInscripciones),
      exhaustMap(() =>
        this.inscripcionesService
          .getInscripcion()
          .pipe(
            map((inscripciones) => inscripcionesCargadas({ inscripciones }))
          )
      )
    )
  );

  cargarInscripcionesCursoEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(cargarInscripcionesCurso),
      exhaustMap((idCurso) =>
        this.inscripcionesService
          .getInscripcionXcurso(idCurso)
          .pipe(
            map((inscripciones) =>
              inscripcionesCargadasCurso({ inscripciones })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private inscripcionesService: InscripcionService
  ) {}
}
