import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UsuarioService } from 'src/app/service/usuario.service';

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

  openDialogCreateUser() {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      disableClose: true,
      width: '80%',
    });

    dialogRef.afterClosed().subscribe((devolutivaModal: any) => {
      if (devolutivaModal) {
        console.log('devolutiva MOdal', devolutivaModal);
      }
    });
  }
}
