import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsersService } from '../services/user.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

 
@Injectable()
export class UsersEffects {
 
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[USERS ACTIONS: PENDING]'),
      mergeMap(() => this.userService.getAllUsers()
        .pipe(
          map(users => {
              return { type: '[USERS ACTIONS: FULFILLED]', users }
          }),
          catchError(() => of({ type: '[USERS ACTIONS: ERROR]' }))
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private userService: UsersService
  ) {}
}