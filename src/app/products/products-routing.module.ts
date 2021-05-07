
import { BankingComponent } from './components/product/anchor-section/industry/banking/banking.component';
import { TelecomListComponent } from './components/product/anchor-section/industry/telecom-list/telecom-list.component';
import { AllListComponent } from './components/product/anchor-section/industry/all-list/all-list.component';

import { SolutionComponent } from './components/product/anchor-section/solution/solution.component';
import { IndustryComponent } from './components/product/anchor-section/industry/industry.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path:'',
  //   component: IndustryComponent,
  // },
  {
    path: 'solution',
    component: SolutionComponent,
  },
  {
    path: '',
    component: AllListComponent,

  },
  {
    path: 'telecom',
    component: TelecomListComponent,
  },
  {
    path: 'banking',
    component: BankingComponent,
  },
  // {
  //   path: 'more',
  //   component: MoreComponent,
  // },
  // { path: 'all', redirectTo: '/product/all', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
