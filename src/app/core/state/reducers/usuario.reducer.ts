import { Action, createReducer, on } from '@ngrx/store';
import * as UsuariosActions from '../actions/usuario.actions';

export const usuariosFeatureKey = 'usuarios';

export interface State {}

export const initialState: State = {};

export const usuarioReducer = createReducer(
  initialState,

  on(UsuariosActions.cargarUsuarios, (state) => state)
);
