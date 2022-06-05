import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCurso from '../reducers/curso.reducer';
import { CursoState } from './../../interfaces/curso.state';
import { AppState } from './../app.state';

export const selectorCurso = (state: AppState) => state.cursos;

export const selectorCargandoCursos = createSelector(
  selectorCurso,
  (state: CursoState) => state.cargando
);

export const selectorListaCursos = createSelector(
  selectorCurso,
  (state: CursoState) => state.cursos
);

