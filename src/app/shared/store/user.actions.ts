// import { Action } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
import { Usuario } from '../models/model/usuario.model';

export enum UserActionsTypes {
  FETCH_PENDING = '[USER ACTIONS: PENDING]',
  FETCH_FULFILLED = '[USER ACTIONS: FULFILLED]',
  FETCH_ERROR = '[USER ACTIONS: ERROR]',
  CLEAR_DATA = '[USER ACTIONS] CLEAR DATA',
}

export const FetchPending = createAction(
    '[USER ACTIONS: PENDING]'
);

export const FetchFulfilled = createAction(
    '[USER ACTIONS: FULFILLED]',
    props<{ users: Usuario[] }>()
);

export const FetchError = createAction(
    '[USER ACTIONS: ERROR]',
    props<{ error: string }>()
);

export const ClearData = createAction(
    '[USER ACTIONS: CLEAR DATA]'
);

