import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/utils/angular-material.module';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { HeaderModule } from '../header/header.module';
import { FormUserModule } from '../form-user/form-user.module';
import { EditUserComponent } from 'src/app/modais/edit-user/edit-user.component';
import { ExcluirUserComponent } from 'src/app/modais/excluir-user/excluir-user.component';

@NgModule({
  declarations: [UsersComponent,
    ExcluirUserComponent,
    EditUserComponent],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    UsersRoutingModule,
    HeaderModule,
    FormUserModule,
  ],
  exports:[UsersComponent]
})
export class UsersModule {}
