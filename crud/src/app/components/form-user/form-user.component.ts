import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/models/usuario.model';
import { TimeService } from 'src/app/service/time.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent {
  @Input() usuarioAtual!: Usuario;
  @Input() editarUsuario: boolean = false;

  @Output() public fecharModal = new EventEmitter<any>();

  public user?: any;
  public userForm!: FormGroup;

  times!: any[];

  tipos = ['ADMIN', 'FUNCIONARIO'];
  cargos = [
    'Dev Júnior',
    'Dev Pleno',
    'Dev Senior',
    'Tech Lead',
    'Product Owner',
    'Scrum Master',
  ];

  public phoneMask = '(00) 0 0000-0000';

  constructor(
    /* public dialogRef: MatDialogRef<FormUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, */
    private fb: FormBuilder,
    private serviceTime: TimeService,
    private service: UsuarioService,
    private router: Router
  ) {
    this.serviceTime.getTimes().subscribe((res) => {
      this.times = res;
    });
  }

  ngOnInit() {
    this.buildForm(this.usuarioAtual);
  }

  public buildForm(usuario: Usuario): void {
    this.userForm = this.fb.group({
      id: [usuario?.id ?? ''],
      nome: [
        usuario?.nome ?? '',
        [Validators.required, Validators.minLength(3)],
      ],
      email: [
        usuario?.email ?? '',
        [Validators.required, Validators.email, Validators.minLength(8)],
      ],
      senha: [
        usuario?.senha ?? '',
        [Validators.required, Validators.minLength(3)],
      ],
      tipo: [usuario?.tipo ?? '', [Validators.required]],
      cargo: [usuario?.cargo ?? '', [Validators.required]],
      salario: [usuario?.salario ?? '', [Validators.required]],
      time: [usuario?.time ?? '', [Validators.required]],
    });
  }

  public onCancel(): void {
    if(this.editarUsuario){
      this.fecharModal.emit(false)
    } else {
      this.router.navigate(['/adm/times']);
    }
  }

  public onSubmit(): void {
    if (this.editarUsuario) {
      this.service.editarUsuario(this.userForm.value).subscribe((res) => {
        this.fecharModal.emit(true)
      });
    } else {
      console.log(this.userForm.value);
      this.service.criarUsuario(this.userForm.value).subscribe((res) => {
        this.router.navigate(['/adm/times']);
      });
    }
  }
}
