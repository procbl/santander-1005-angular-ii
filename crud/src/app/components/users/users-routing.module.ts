import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; 
import { UsersComponent } from "./users.component";
import { AuthGuard } from "src/app/guards/auth-guard";
import { FormUserComponent } from "../form-user/form-user.component";

 

const routes: Routes = [
  {
    path: 'times',
    component: UsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'adicionar',
    component: FormUserComponent,
    canActivate: [AuthGuard],
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
