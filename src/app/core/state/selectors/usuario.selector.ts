import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsuarios from '../reducers/usuario.reducer';

export const selectUsuariosState = createFeatureSelector<fromUsuarios.State>(
  fromUsuarios.usuariosFeatureKey
);
