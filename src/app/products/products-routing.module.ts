import { TechTextileComponent } from './components/product/anchor-section/technology/tech-textile/tech-textile.component';
import { TechBankinngComponent } from './components/product/anchor-section/technology/tech-bankinng/tech-bankinng.component';
import { TechTelecomComponent } from './components/product/anchor-section/technology/tech-telecom/tech-telecom.component';
import { TechListComponent } from './components/product/anchor-section/technology/tech-list/tech-list.component';
import { SolutionTextileComponent } from './components/product/anchor-section/solution/solution-textile/solution-textile.component';
import { IndustryTextileComponent } from './components/product/anchor-section/industry/industry-textile/industry-textile.component';
import { SolutionBankComponent } from './components/product/anchor-section/solution/solution-bank/solution-bank.component';
import { SolutionTelecomComponent } from './components/product/anchor-section/solution/solution-telecom/solution-telecom.component';
import { SoultionListComponent } from './components/product/anchor-section/solution/soultion-list/soultion-list.component';

import { BankingComponent } from './components/product/anchor-section/industry/banking/banking.component';
import { TelecomListComponent } from './components/product/anchor-section/industry/telecom-list/telecom-list.component';
import { AllListComponent } from './components/product/anchor-section/industry/all-list/all-list.component';

import { SolutionComponent } from './components/product/anchor-section/solution/solution.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'all-list',
  //   component: AllListComponent,

  // },
  {
    path: '',
    component: AllListComponent,

  },

  {
    path: 'industry-telecom',
    component: TelecomListComponent,
  },
  {
    path: 'industry-banking',
    component: BankingComponent,
  },
  {
    path: 'industry-textile',
    component: IndustryTextileComponent,
  },
  {
    path: 'solution/solution-list',
    component: SoultionListComponent,
  },

  {
    path: 'solution/solution-bank',
    component: SolutionBankComponent,
  },

  {
    path: 'solution/solution-telecom',
    component: SolutionTelecomComponent,
  },

  {
    path:'solution/solution-textile',
    component:SolutionTextileComponent
  },

  {
    path:'technology/tech-list',
    component:TechListComponent
  },
  {
    path:'technology/tech-telecom',
    component:TechTelecomComponent
  },
  {path:'technology/tech-banking',
   component:TechBankinngComponent
 },
 {
   path:'technology/tech-textile',
   component:TechTextileComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
