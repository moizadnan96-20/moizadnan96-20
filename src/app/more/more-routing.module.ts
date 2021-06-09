import { MoreIndustryComponent } from './more-industry/more-industry.component';

import { MoreBankingComponent } from './more-banking/more-banking.component';
import { MoreListComponent } from './more-list/more-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path:'',
    component: MoreListComponent
  },*/
   
  {
    path:'more-banking',
    component:MoreBankingComponent
  },
  {
    path:'more-list',
    component:MoreListComponent
  },

  {
    path:'more-industry',
    component:MoreIndustryComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreRoutingModule {}
