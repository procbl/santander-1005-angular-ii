import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; 
import { AuthGuard } from "src/app/guards/auth-guard";
import { VisaoAdmComponent } from "./visao-adm.component";
import { FormUserComponent } from "src/app/components/form-user/form-user.component";

 

const routes: Routes = [
  {
    path: 'times',
    component: VisaoAdmComponent,
  },
  {
    path: 'adicionar',
    component: FormUserComponent,
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisaoAdmRoutingModule {}
