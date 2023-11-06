import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormUserComponent } from '../form-user/form-user.component';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { ExcluirUserComponent } from '../excluir-user/excluir-user.component';
import { TimeService } from 'src/app/service/time.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  @Input() public usuario?: any;
  usuarios!: any[];
  times!: any[];

  constructor(
    private dialog: MatDialog,
    private service: UsuarioService,
    private serviceTime: TimeService
  ) {
    this.getUsuarios();
  }

  getUsuarios() {
    this.service.getUsuarios().subscribe((res) => {
      if (res) {
        this.usuarios = res;
        this.montarTimes(this.usuarios);
      } else {
        res.error;
      }
    });
  }

  montarTimes(usuarios: Usuario[]) {
    this.serviceTime.getTimes().subscribe((res) => {
      this.times = res;
      this.times.forEach((time: any) => {
        time.integrantes = [];
        this.usuarios.forEach((usuario) => {
          if (usuario.time === time.nome) {
            time.integrantes.push(usuario);
          }
        });
      });
      console.log(this.times)
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

  openDialogCreateUser() {
    const dialogRef = this.dialog.open(FormUserComponent, {
      disableClose: true,
      width: '80%',
    });

    dialogRef.afterClosed().subscribe((devolutivaModal: Usuario) => {
      if (devolutivaModal) {
        this.service.criarUsuario(devolutivaModal).subscribe((res) => {
          console.log(res);
          this.getUsuarios();
        });
      }
    });
  }

  openDialogEditUser(usuario: Usuario) {
    const dialogRef = this.dialog.open(FormUserComponent, {
      disableClose: true,
      width: '80%',
      data: usuario,
    });

    dialogRef.afterClosed().subscribe((devolutivaModal: Usuario) => {
      if (devolutivaModal) {
        this.service.editarUsuario(devolutivaModal).subscribe((res) => {
          console.log(res);
          this.getUsuarios();
        });
      }
    });
  }
}
