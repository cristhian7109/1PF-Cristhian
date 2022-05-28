import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {exhaustMap} from "rxjs";
import {map} from "rxjs/operators";
import { CursoService } from "../../services/cursos.service";
import { cargarCursos, cursosCargados } from '../actions/curso.actions';

@Injectable()
export class CursoEffects {
  cargarCursosEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(cargarCursos),
      exhaustMap(() =>
        this.cursosService.getCurso()
          .pipe(map((cursos) => cursosCargados({ cursos })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private cursosService: CursoService
  ) {}
}