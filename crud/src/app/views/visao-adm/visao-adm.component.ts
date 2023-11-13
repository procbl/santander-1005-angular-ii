import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { ExcluirUserComponent } from '../../modais/excluir-user/excluir-user.component';
import { TimeService } from 'src/app/service/time.service';
import { EditUserComponent } from 'src/app/modais/edit-user/edit-user.component';

@Component({
  selector: 'app-visao-adm',
  templateUrl: './visao-adm.component.html',
  styleUrls: ['./visao-adm.component.scss'],
})
export class VisaoAdmComponent { 
  usuarioLogado!:any

  constructor(
  ) {
    this.usuarioLogado = JSON.parse(localStorage.getItem('USER') || 'null');
  }
}
