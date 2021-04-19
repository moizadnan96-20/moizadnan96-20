import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechLeadComponent } from './tech-lead.component';

const routes: Routes = [{ path: '', component: TechLeadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechLeadRoutingModule { }
