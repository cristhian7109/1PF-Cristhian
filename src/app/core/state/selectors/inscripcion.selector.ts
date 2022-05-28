import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripciones from '../reducers/inscripcion.reducer';
import { InscripcionState } from './../../interfaces/inscripcion.state';

export const selectorInscripciones = createFeatureSelector<InscripcionState>(
  fromInscripciones.inscripcionesFeatureKey
);

export const selectorCargandoInscripciones = createSelector(
  selectorInscripciones,
  (state: InscripcionState) => state.cargando
);

export const selectorListaInscripciones = createSelector(
  selectorInscripciones,
  (state: InscripcionState) => state.inscripciones
);

export const selectorListaInscripcionesCurso = createSelector(
  selectorInscripciones,
  (state: InscripcionState) => state.inscripciones
);
