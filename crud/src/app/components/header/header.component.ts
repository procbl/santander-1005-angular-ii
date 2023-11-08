import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router){}
  logout() {
    localStorage.setItem('USER', '');
    this.router.navigate(['/login'])

  }
}
