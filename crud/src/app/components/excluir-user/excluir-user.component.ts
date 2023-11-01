import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-excluir-user',
  templateUrl: './excluir-user.component.html',
  styleUrls: ['./excluir-user.component.scss'],
})
export class ExcluirUserComponent {
  usuarioAtual!: Usuario;
  constructor(
    public dialogRef: MatDialogRef<ExcluirUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.usuarioAtual = this.data;
  }
  public onCancel(): void {
    this.dialogRef.close(false);
  }

  excluirUsuario():void {
    this.dialogRef.close(true);
  }
}
