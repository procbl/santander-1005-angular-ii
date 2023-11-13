import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/utils/angular-material.module';
import { CommonModule } from '@angular/common'; 
import { FormUserModule } from 'src/app/components/form-user/form-user.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { VisaoFuncionarioComponent } from './visao-funcionario.component';
import { VisaoFuncionarioRoutingModule } from './visao-funcionario-routing.module';
import { UsersModule } from 'src/app/components/users/users.module';

@NgModule({
  declarations: [VisaoFuncionarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    VisaoFuncionarioRoutingModule,
    UsersModule,
    HeaderModule,
    FormUserModule,
  ],
})
export class VisaoFuncionarioModule {}
