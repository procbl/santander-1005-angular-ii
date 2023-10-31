import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() logoutEmitter = new EventEmitter<any>();

  logout() {
    this.logoutEmitter.emit(true)
  }
}
