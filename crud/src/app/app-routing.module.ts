import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'adm',
    loadChildren: () =>
      import('./views/visao-adm/visao-adm.module').then((m) => m.VisaoAdmModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'func',
    loadChildren: () =>
      import('./views/visao-funcionario/visao-funcionario.module').then((m) => m.VisaoFuncionarioModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
