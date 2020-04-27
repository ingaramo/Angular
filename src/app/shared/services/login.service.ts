import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public logged: boolean = false
  constructor(
  ) { }
  login(user: string, password: String){
    this.logged=(user == "test" && password == "Ayi+2020");
    return this.logged;
  }
  logout(){
    this.logged = false;
  }
}
