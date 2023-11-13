import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/utils/angular-material.module';
import { CommonModule } from '@angular/common'; 
import { FormUserModule } from 'src/app/components/form-user/form-user.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { VisaoAdmComponent } from './visao-adm.component';
import { VisaoAdmRoutingModule } from './visao-adm-routing.module';
import { UsersModule } from 'src/app/components/users/users.module';

@NgModule({
  declarations: [VisaoAdmComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    VisaoAdmRoutingModule,
    UsersModule,
    HeaderModule,
    FormUserModule,
  ],
})
export class VisaoAdmModule {}
