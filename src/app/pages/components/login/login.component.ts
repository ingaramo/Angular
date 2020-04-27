import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService ) { }

  ngOnInit(): void {
  }
  login (user: string, password: string){
    if (this.loginService.login(user, password)){
      this.router.navigate(['/home']);
      return
    }
    alert("Usuario o contraseña incorrectos")
  }
}
