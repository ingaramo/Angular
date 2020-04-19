import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from '../../models/model/usuario.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { UsersState } from '../../store/user.reducers';
import * as fromActionsUsers from 'src/app/shared/store/user.actions';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  public userList: Usuario[] = [];
  public isLoading = true;
  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<{ users: UsersState }>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromActionsUsers.FetchPending());
    this.store.subscribe( ({ users }) => {
      this.isLoading = users.pending;
      if(users.data && users.data.length) {

        this.formatUsers(users.data);
      }
    })
  }

  formatUsers(users: any) {
    this.userList = users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: 'This is description',
        phone: user.phone,
        delete: false
      }
    });
  }

  renderUsers() {
    this.isLoading = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach( (s: Subscription) => s.unsubscribe() );
  }

}
