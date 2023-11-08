import { Component, Inject, OnInit } from '@angular/core';
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
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent {
  public user?: any;
  public userForm!: FormGroup;

  times!: any[]

  editarUsuario: boolean = false;

  usuarioAtual!: Usuario;

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
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private serviceTime: TimeService,
    private service: UsuarioService,
    private router: Router
  ) {
    this.serviceTime.getTimes().subscribe((res) => {
      this.times = res
    })
    console.log(this.data);
    if (this.data) {
      this.editarUsuario = true;
      this.usuarioAtual = this.data;
      this.buildForm(this.usuarioAtual);
    } else {
      this.editarUsuario = false;
      this.buildForm(this.usuarioAtual);
    }
  }

  ngOnInit() {
    this.buildForm(this.usuarioAtual)
  }

  public buildForm(usuario: Usuario): void {
      this.userForm = this.fb.group({
        id:[usuario?.id ?? ''],
        nome: [usuario?.nome ?? '', [Validators.required, Validators.minLength(3)]],
        email: [
          usuario?.email ?? '',
          [Validators.required, Validators.email, Validators.minLength(8)],
        ],
        senha: [usuario?.senha ?? '', [Validators.required, Validators.minLength(3)]],
        tipo: [usuario?.tipo ?? '', [Validators.required]],
        cargo: [usuario?.cargo ?? '', [Validators.required]],
        salario: [usuario?.salario ?? '', [Validators.required]],
        time: [usuario?.time ?? '', [Validators.required]],
      });
  }

  public onCancel(): void {
    //this.router.navigate(['/listar-times'])
    this.dialogRef.close();
  }

  public fecharModal(event:any): void {
    this.dialogRef.close(event);
  }

  public onSubmit(): void {
    //console.log(this.userForm.value);
    this.dialogRef.close(this.userForm.value);
    //this.user = this.userForm.value;
    //this.dialogRef.close(this.user);
    /* this.service.criarUsuario(this.userForm.value).subscribe((res) => {
      this.router.navigate(['/listar-times'])
    }); */
  }
}
