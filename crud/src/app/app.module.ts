import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ptBr from '@angular/common/locales/pt';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { registerLocaleData } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { cepMaskPipe } from './components/pipes/cep-mask.pipe';
import { FormUserComponent } from './components/form-user/form-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirUserComponent } from './modais/excluir-user/excluir-user.component';
import { AngularMaterialModule } from './utils/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { EditUserComponent } from './modais/edit-user/edit-user.component';
import { LoginModule } from './components/login/login.module';

registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    cepMaskPipe,
    FormUserComponent,
    ExcluirUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    AngularMaterialModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
