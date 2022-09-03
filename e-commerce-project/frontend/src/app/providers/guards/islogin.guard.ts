import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsloginGuard implements CanActivate {
  constructor(private _auth:AuthService, private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if(!localStorage.getItem("Ecomerce1Token")){
        window.alert("is not login")
        this._router.navigateByUrl("/login")
        return false
      }
    return true;
  }
  
}
