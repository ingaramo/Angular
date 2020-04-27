import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor( private router: Router
    ){
  
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.idValido(next.paramMap.get('id'))) {
        this.router.navigate(['/home']);
        return false;
      }
    return true;
}
private idValido(value:string): boolean{
  let id = parseInt(value);
  return 0<id && id<11;
}
  
}
