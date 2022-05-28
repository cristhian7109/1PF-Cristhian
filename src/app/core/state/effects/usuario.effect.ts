import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import * as UsuarioActions from '../actions/usuario.actions';


@Injectable()
export class UsuariosEffects {


  cargarUsuarios$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(UsuarioActions.cargarUsuarios),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });


  constructor(private actions$: Actions) {}

}
