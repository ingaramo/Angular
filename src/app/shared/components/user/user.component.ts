import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../../models/model/usuario.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output()
  detalles = new EventEmitter <Usuario>();
  @Output()
  delete = new EventEmitter <Number>();
  @Input()
   user: Usuario;

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser():void{
    this.delete.emit(this.user.id)
  }

  userDetail(){
    this.detalles.emit(this.user)
  }
}
