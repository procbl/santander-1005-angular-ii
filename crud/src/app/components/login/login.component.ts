import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user?: any;
  form!: FormGroup;
  usuario!: any;
  usuarios!: any[];

  constructor(private fb: FormBuilder, private service: UsuarioService, private router: Router) {
    this.buildForm();
    this.service.getUsuarios().subscribe((res) => {
      this.usuarios = res;
      console.log(res)
    })
  }

  ngOnInit(): void { 
    const usuarioAutenticado = JSON.parse(localStorage.getItem('USER') || 'null');
    if (usuarioAutenticado) {
      this.usuario = usuarioAutenticado;
    }
  }

  buildForm() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.minLength(3)]],
      senha: [null, [Validators.required]],
    })
  }

  login(): void { 
    this.user = { email: this.form.value.email, senha: this.form.value.senha};
    this.fazerLogin(this.user)
  }

  fazerLogin(user: any) {
    const existeUsuario: any | undefined = this.usuarios?.find(
      (u) => u.email === user.email && u.senha === user.senha
    );
    if (existeUsuario) {
      console.log('Usuário autenticado', existeUsuario);
      this.usuario = existeUsuario;
      localStorage.setItem('USER', JSON.stringify(this.usuario));
      this.router.navigate(['/header'])

    } else {
      console.log('Falha no login');
    }
  }
   
}
