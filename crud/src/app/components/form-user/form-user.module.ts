import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/utils/angular-material.module';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './form-user.component';
import { FormUserRoutingModule } from './form-user-routing.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [FormUserComponent],
  exports: [FormUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FormUserRoutingModule,
    HeaderModule,
  ],
})
export class FormUserModule {}
