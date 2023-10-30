import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  usuario?: any;
  usuarios?: any[];

  constructor(private service: UsuarioService) {
    this.service.getUsuarios().subscribe((res) => {
      this.usuarios = res;
    })
  }

  ngOnInit(): void { 
    const usuarioAutenticado = JSON.parse(localStorage.getItem('USER') || 'null');
    if (usuarioAutenticado) {
      this.usuario = usuarioAutenticado;
    }
  }

  fazerLogin(user: any) {
    const existeUsuario: any | undefined = this.usuarios?.find(
      (u) => u.email === user.email && u.senha === user.senha
    );

    if (existeUsuario) {
      console.log('Usuário autenticado', existeUsuario);
      this.usuario = existeUsuario;
      localStorage.setItem('USER', JSON.stringify(this.usuario));
    } else {
      console.log('Falha no login');
    }
  }
}
