import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean{
   
    if(this.IsLoggedIn()){

      this.router.navigate(['login'])

      return false;
    }
    return true;
  }

  //Verfying user logged in or not
  IsLoggedIn(){
    let token = localStorage.getItem('token');

    if(!token)
    return true;
    return false;
  }
}
