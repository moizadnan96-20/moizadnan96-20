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
import { HelpComponent } from './help/help.component';
import { MoreItnmComponent } from './more-itnm/more-itnm.component';
import { MoreQuestionComponent } from './more-itnm/more-question/more-question.component';
import { MoreProjectInfoComponent } from './more-itnm/more-project-info/more-project-info.component';
import { MoreNetcoolComponent } from './more-netcool/more-netcool.component';
import { MoreJazzsmComponent } from './more-jazzsm/more-jazzsm.component';
import { MoreIcabComponent } from './more-icab/more-icab.component';
import { MoreIcabProjectInfoComponent } from './more-icab/more-icab-project-info/more-icab-project-info.component';
import { MoreIcabQuestionSectionComponent } from './more-icab/more-icab-question-section/more-icab-question-section.component';
import { MoreJazzitmComponent } from './more-jazzitm/more-jazzitm.component';
import { MoreJazzitmProjectInfoComponent } from './more-jazzitm/more-jazzitm-project-info/more-jazzitm-project-info.component';
import { MoreJazzitmQuestionSectionComponent } from './more-jazzitm/more-jazzitm-question-section/more-jazzitm-question-section.component';
import { MoreJazznoComponent } from './more-jazzno/more-jazzno.component';
import { MoreJazznoProjectInfoComponent } from './more-jazzno/more-jazzno-project-info/more-jazzno-project-info.component';
import { MoreJazznoQuestionSectionComponent } from './more-jazzno/more-jazzno-question-section/more-jazzno-question-section.component';
import { MoreJazzisdComponent } from './more-jazzisd/more-jazzisd.component';
import { MoreJazzisdProjectInfoComponent } from './more-jazzisd/more-jazzisd-project-info/more-jazzisd-project-info.component';
import { MoreJazzisdQuestionSectionComponent } from './more-jazzisd/more-jazzisd-question-section/more-jazzisd-question-section.component';
import { MoreJazzsmProjectInfoComponent } from './more-jazzsm/more-jazzsm-project-info/more-jazzsm-project-info.component';
import { MoreJazzsmQuestionSectionComponent } from './more-jazzsm/more-jazzsm-question-section/more-jazzsm-question-section.component';
import { MoreNetcoolProjectInfoComponent } from './more-netcool/more-netcool-project-info/more-netcool-project-info.component';
import { MoreNetcoolQuestionSectionComponent } from './more-netcool/more-netcool-question-section/more-netcool-question-section.component';




@NgModule({
  declarations: [MoreListComponent, ProjectsInfoComponent, MoreQuestionSectionComponent, MoreComponent, MoreBankingComponent, MoreBankingProjectInfoComponent, MoreBankingQuestionsComponent, MoreIndustryComponent, MoreIndustryProjectInfoComponent, MoreIndustryQuestionsComponent, HelpComponent, MoreItnmComponent, MoreQuestionComponent, MoreProjectInfoComponent, MoreNetcoolComponent, MoreJazzsmComponent, MoreIcabComponent, MoreIcabProjectInfoComponent, MoreIcabQuestionSectionComponent, MoreJazzitmComponent, MoreJazzitmProjectInfoComponent, MoreJazzitmQuestionSectionComponent, MoreJazznoComponent, MoreJazznoProjectInfoComponent, MoreJazznoQuestionSectionComponent, MoreJazzisdComponent, MoreJazzisdProjectInfoComponent, MoreJazzisdQuestionSectionComponent, MoreJazzsmProjectInfoComponent, MoreJazzsmQuestionSectionComponent, MoreNetcoolProjectInfoComponent, MoreNetcoolQuestionSectionComponent ],
  imports: [
    CommonModule,
    MoreRoutingModule,
    SharedModule

  ]
})
export class MoreModule { }
