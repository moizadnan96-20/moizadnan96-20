import { SharedModule } from './../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoreRoutingModule } from './more-routing.module';
import { MoreListComponent } from './more-list/more-list.component';
import { ProjectsInfoComponent } from './more-list/projects-info/projects-info.component';
import { MoreQuestionSectionComponent } from './more-list/more-question-section/more-question-section.component';
import { MoreComponent } from './more.component';
import { ProductsModule } from '../products/products.module';
import { MoreBankingComponent } from './more-banking/more-banking.component';
import { MoreBankingProjectInfoComponent } from './more-banking/more-banking-project-info/more-banking-project-info.component';
import { MoreBankingQuestionsComponent } from './more-banking/more-banking-questions/more-banking-questions.component';
import { MoreIndustryComponent } from './more-industry/more-industry.component';
import { MoreIndustryProjectInfoComponent } from './more-industry/more-industry-project-info/more-industry-project-info.component';
import { MoreIndustryQuestionsComponent } from './more-industry/more-industry-questions/more-industry-questions.component';




@NgModule({
  declarations: [MoreListComponent, ProjectsInfoComponent, MoreQuestionSectionComponent, MoreComponent, MoreBankingComponent, MoreBankingProjectInfoComponent, MoreBankingQuestionsComponent, MoreIndustryComponent, MoreIndustryProjectInfoComponent, MoreIndustryQuestionsComponent ],
  imports: [
    CommonModule,
    MoreRoutingModule,
    SharedModule

  ]
})
export class MoreModule { }
