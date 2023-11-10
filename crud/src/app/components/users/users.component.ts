import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormUserComponent } from '../form-user/form-user.component';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { ExcluirUserComponent } from '../../modais/excluir-user/excluir-user.component';
import { TimeService } from 'src/app/service/time.service';
import { EditUserComponent } from 'src/app/modais/edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  @Input() public usuario?: any;
  usuarioLogado!:any
  usuarios!: any[];
  times!: any[];

  constructor(
    private dialog: MatDialog,
    private service: UsuarioService,
    private serviceTime: TimeService
  ) {
    this.serviceTime.getTimes().subscribe((res) => {
      this.times = res;
    });
    this.getUsuarios();
    this.usuarioLogado = JSON.parse(localStorage.getItem('USER') || 'null');
  }

  getUsuarios() {
    this.service.getUsuarios().subscribe((res) => {
      if (res) {
        this.usuarios = res;
        this.montarTimes();
      } else {
        res.error;
      }
    });
  }

  montarTimes() {
    this.times.forEach((time: any) => {
      time.integrantes = [];
      this.usuarios.forEach((usuario) => {
        if (usuario.time === time.nome) {
          time.integrantes.push(usuario);
        }
      });
      console.log(this.times);
    });
  }

  openDialogDeleteUser(usuario: Usuario) {
    const dialogRef = this.dialog.open(ExcluirUserComponent, {
      disableClose: true,
      width: '60%',
      data: usuario,
    });
    dialogRef.afterClosed().subscribe((devolutivaModal: Usuario) => {
      if (devolutivaModal) {
        this.service.excluirUsuario(usuario).subscribe((res) => {
          this.getUsuarios();
        });
      } else {
        alert('não foi excluído');
      }
    });
  }

  openDialogEditUser(usuario: Usuario) {
    const dialogRef = this.dialog.open(EditUserComponent, {
      disableClose: true,
      width: '80%',
      data: usuario,
    });

    dialogRef.afterClosed().subscribe((devolutivaModal: Usuario) => {
      if (devolutivaModal) {
        this.getUsuarios();
      }
    });
  }
}
