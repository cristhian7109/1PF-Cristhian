import {createAction, props} from "@ngrx/store";
import { Usuario } from 'src/app/core/interfaces/usuario';

export const cargarUsuarios = createAction(
  '[Usuarios] Cargar Usuarios'
);

export const UsuariosCargados = createAction(
  '[Usuarios] Usuarios Cargados',
  props<{ users: Usuario[] }>()
)
