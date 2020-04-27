import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from '../../models/model/usuario.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { UsersState } from '../../store/user.reducers';
import * as fromActionsUsers from 'src/app/shared/store/user.actions';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  public userList: Usuario[] = [];
  public detail: boolean=false;
  public userDetail: number;
  public isLoading = true;
  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<{ users: UsersState }>,
    private router: Router,
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
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        company: {
          name: user.company.name,
          catchPhrase: user.company.catchPhrase,
          bs: user.company.bs
        },
        address: {
            street: user.address.street,
            suite: user.address.suite,
            city : user.address.city,
            zipcode: user.address.zipcode,
        }
    }
    });
  }


  ngOnDestroy() {
    this.subscriptions.forEach( (s: Subscription) => s.unsubscribe() );
  }

  onItemDelete(userId:number){
    let id=this.userList.findIndex( user => user.id==userId )
    this.userList.splice(id,1)

  }
  onItemDetalle(user){
    this.router.navigate([`/user/${user.id}`]);
  }

}
