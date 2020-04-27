import { Component, OnInit, } from '@angular/core';
import { Usuario } from '../../models/model/usuario.model';
import { UsersState } from '../../store/user.reducers';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  userDetail: Usuario;

  constructor( private store: Store<{ users: UsersState }>, private router: ActivatedRoute ) { }

  ngOnInit(): void {
    this.store.subscribe( ({ users }) => {
      const id = this.router.snapshot.paramMap.get("id");
      this.userDetail = users.data.find(e => e.id == id);
    })

  }

}
