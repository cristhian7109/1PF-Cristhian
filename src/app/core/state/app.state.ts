import { ActionReducerMap } from "@ngrx/store";
import {cursoReducer} from "./reducers/curso.reducer";
import {inscripcionesReducer} from "./reducers/inscripcion.reducer";
import { CursoState } from './../interfaces/curso.state';
import { InscripcionState } from './../interfaces/inscripcion.state';

export interface AppState {
  cursos: CursoState,
  inscripciones: InscripcionState
};

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  cursos: cursoReducer,
  inscripciones: inscripcionesReducer
}
