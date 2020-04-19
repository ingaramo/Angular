import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UsersState {
  data: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
}

export const initialState: UsersState = {
  data: null,
  pending: null,
  error: null,
  isFetchCompleted: null,
};

const usersReducer = createReducer(
    initialState,
    on(UserActions.FetchPending, state => ({ ...state, pending: true })),
    on(UserActions.FetchFulfilled, (state, { users }) => {
        return { ...state, data: users, pending: false, isFetchCompleted: true }
    }
    ),
    on(UserActions.FetchError, state => ({ ...state, error: true, pending: false })),
    on(UserActions.ClearData, state => (initialState))
  );
  
export function reducer(state: UsersState | undefined, action: Action) {
    return usersReducer(state, action);
}
