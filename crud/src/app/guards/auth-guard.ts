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
      const usuarioAutenticado = JSON.parse(
        localStorage.getItem('USER') || 'null'
      );
      const tempoToken = JSON.parse(
        localStorage.getItem('TIMETOKEN') || 'null'
      );
      const tokenExpirado = new Date().getTime() - tempoToken <= 200000;

      if (
        usuarioAutenticado?.tipo === 'ADMIN' &&
        tokenExpirado &&
        (state.url === '/adm/times' || state.url === '/adm/adicionar')
      ) {
        resolve(true);
      } else if (
        usuarioAutenticado?.tipo === 'FUNCIONARIO' &&
        tokenExpirado &&
        state.url === '/func/times'
      ) {
        resolve(true);
      } else if (usuarioAutenticado && tokenExpirado) {
        usuarioAutenticado?.tipo === 'ADMIN' ? 
        this.router.navigate(['/adm/times']) : this.router.navigate(['/func/times']);
      } else {
        resolve(false);
        this.router.navigate(['/login']);
      }
    });
  }
}
