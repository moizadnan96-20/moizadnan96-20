import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudComputingComponent } from './components/cloud-computing/cloud-computing.component';

const routes: Routes = [
  {
    path:'',
    component:CloudComputingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudComputingRoutingModule { }
