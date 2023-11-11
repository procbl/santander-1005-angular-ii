import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "src/app/utils/angular-material.module";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports:[HeaderComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ], 
})
export class HeaderModule { }
