import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlumnos from '../reducers/alumno.reducer';

export const selectAlumnosState = createFeatureSelector<fromAlumnos.State>(
  fromAlumnos.alumnosFeatureKey
);
