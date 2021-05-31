import { SharedModule } from './../shared/shared.module';
import { HelpComponent } from './components/product/help/help.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { HeroSectionComponent } from './components/product/hero-section/hero-section.component';
import { AnchorSectionComponent } from './components/product/anchor-section/anchor-section.component';
import { IndustryComponent } from './components/product/anchor-section/industry/industry.component';
import { SolutionComponent } from './components/product/anchor-section/solution/solution.component';

import { SoultionListComponent } from './components/product/anchor-section/solution/soultion-list/soultion-list.component';
import { TelecomListComponent } from './components/product/anchor-section/industry/telecom-list/telecom-list.component';
import { AllListComponent } from './components/product/anchor-section/industry/all-list/all-list.component';
import { BankingComponent } from './components/product/anchor-section/industry/banking/banking.component';

import { MoreModule } from '../more/more.module';
import { SolutionBankComponent } from './components/product/anchor-section/solution/solution-bank/solution-bank.component';
import { SolutionTelecomComponent } from './components/product/anchor-section/solution/solution-telecom/solution-telecom.component';

@NgModule({
  declarations: [
    HeroSectionComponent,
    ProductComponent,
    AnchorSectionComponent,
    IndustryComponent,
    SolutionComponent,
    SoultionListComponent,
    TelecomListComponent,
    AllListComponent,
    BankingComponent,
    HelpComponent,
    SolutionBankComponent,
    SolutionTelecomComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, MoreModule, SharedModule],
  exports: [HelpComponent],
})
export class ProductsModule {}
