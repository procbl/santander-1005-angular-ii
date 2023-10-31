import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() loginEmitter = new EventEmitter<any>();
  user?: any;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private service: UsuarioService) {
    this.buildForm();
    console.log(this.service.getTeste());
    this.service.setTeste();
  }

  buildForm() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.minLength(3)]],
      senha: [null, [Validators.required]],
    })
  }

  login(): void { 
    this.user = { email: this.form.value.email, senha: this.form.value.senha};
    this.loginEmitter.emit(this.user)
  }
   
}
