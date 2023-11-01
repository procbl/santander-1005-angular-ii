import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormUserComponent } from '../form-user/form-user.component';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { ExcluirUserComponent } from '../excluir-user/excluir-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  @Input() public usuario?: any;
  usuarios!: any[];

  constructor(private dialog: MatDialog, private service: UsuarioService) {
    console.log(this.service.getTeste());
    this.service.getUsuarios().subscribe((res) => {
      if (res) {
        this.usuarios = res;
      } else {
        res.error;
      }
    });
    this.service.setTeste();
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
          this.service.getUsuarios().subscribe((res) => {
            if (res) {
              this.usuarios = res;
            } else {
              res.error;
            }
          });
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
          this.service.getUsuarios().subscribe((res) => {
            if (res) {
              this.usuarios = res;
            } else {
              res.error;
            }
          });
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
          this.service.getUsuarios().subscribe((res) => {
            if (res) {
              this.usuarios = res;
            } else {
              res.error;
            }
          });
        });
      }
    });
  }
}
