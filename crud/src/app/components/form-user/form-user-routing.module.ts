import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; 
import { FormUserComponent } from "./form-user.component";

 

const routes: Routes = [
  {
    path: '',
    component: FormUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormUserRoutingModule {}
