import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsersService } from '../services/user.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';

 
@Injectable()
export class UsersEffects {
 
  constructor(
    private actions$: Actions,
    private userService: UsersService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[USER ACTIONS: PENDING]'),
      mergeMap(() => this.userService.getAllUsers()
        .pipe(
          map(users => {
              return { type: '[USER ACTIONS: FULFILLED]', users }
          }),
          catchError(() => of({ type: '[USER ACTIONS: ERROR]' }))
        )
      )
    )
  );

  
 
 

}