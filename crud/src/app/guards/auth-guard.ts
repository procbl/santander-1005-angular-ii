import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve, reject) => {
      const usuarioAutenticado = JSON.parse(localStorage.getItem('USER') || 'null');
      const tempoToken = JSON.parse(localStorage.getItem('TIMETOKEN') || 'null');
      console.log(tempoToken)
      console.log(new Date().getTime())
      const tokenExpirado = ((new Date().getTime() - tempoToken) <= 20000 )  
      console.log(tokenExpirado)
      if(usuarioAutenticado && tokenExpirado) {
        resolve(true);
      } else {
        resolve(false)
        this.router.navigate(['/login'])
      }
    });
  }
}
