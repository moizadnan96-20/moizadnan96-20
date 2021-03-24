import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultancyComponent  } from "./components/consultancy/consultancy.component";
const routes: Routes = [
  {
    path:'',
    component:ConsultancyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultancyRoutingModule { }
