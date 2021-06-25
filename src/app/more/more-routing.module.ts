import { MoreITComponent } from './more-it/more-it.component';
import { MoreFinanicalComponent } from './more-finanical/more-finanical.component';
import { MorePublicServiceComponent } from './more-public-service/more-public-service.component';
import { MoreJazzisdComponent } from './more-jazzisd/more-jazzisd.component';
import { MoreJazznoComponent } from './more-jazzno/more-jazzno.component';
import { MoreJazzitmComponent } from './more-jazzitm/more-jazzitm.component';
import { MoreIcabComponent } from './more-icab/more-icab.component';
import { MoreNetcoolComponent } from './more-netcool/more-netcool.component';
import { MoreJazzsmComponent } from './more-jazzsm/more-jazzsm.component';
import { MoreItnmComponent } from './more-itnm/more-itnm.component';
import { MoreIndustryComponent } from './more-industry/more-industry.component';
import { MoreBankingComponent } from './more-banking/more-banking.component';

import { MoreListComponent } from './more-list/more-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

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
  },

  {
    path:'more-itnm',
    component:MoreItnmComponent
  },
  {
    path:'more-jazzsm',
    component:MoreJazzsmComponent
  },
  {
    path:'more-netcool',
    component:MoreNetcoolComponent
  },
  {
    path:'more-icab',
    component:MoreIcabComponent
  },
  {
    path:'more-jazzitm',
    component:MoreJazzitmComponent
  },
  {
    path:'more-jazzno',
    component:MoreJazznoComponent
  },
  {
    path:'more-jazzisd',
    component:MoreJazzisdComponent
  },
  {
    path:'more-public-service',
    component:MorePublicServiceComponent
  },
  {
    path:'more-finanical',
    component:MoreFinanicalComponent
  },
  {
    path:'more-it',
    component:MoreITComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreRoutingModule {}
