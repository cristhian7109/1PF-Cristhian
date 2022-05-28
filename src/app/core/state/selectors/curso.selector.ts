import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCurso from '../reducers/curso.reducer';
import { CursoState } from './../../interfaces/curso.state';

export const selectorCurso = createFeatureSelector<CursoState>(
  fromCurso.cursoFeatureKey
);

export const selectorCargandoCursos = createSelector(
  selectorCurso,
  (state: CursoState) => state.cargando
);

export const selectorListaCursos = createSelector(
  selectorCurso,
  (state: CursoState) => state.cursos
);

