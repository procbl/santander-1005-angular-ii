import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; 
import { VisaoFuncionarioComponent } from "./visao-funcionario.component";

 

const routes: Routes = [
  {
    path: 'times',
    component: VisaoFuncionarioComponent,
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisaoFuncionarioRoutingModule {}
