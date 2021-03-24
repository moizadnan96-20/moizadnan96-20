import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfrastructureComponent } from './component/infrastructure/infrastructure.component';

const routes: Routes = [
  {
    path:'',
    component:InfrastructureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfrastructureRoutingModule { }
