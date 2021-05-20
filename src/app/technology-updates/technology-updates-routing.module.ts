import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyUpdatesComponent } from './technology-updates.component';

const routes: Routes = [
  {
    path:"",
    component: TechnologyUpdatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyUpdatesRoutingModule { }
