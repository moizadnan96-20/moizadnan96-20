import { HeroSectionComponent } from './components/technology/hero-section/hero-section.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './components/technology/technology.component';
import { InfoSectionComponent } from './components/technology/info-section/info-section.component';
import { SubInfoSectionComponent } from './components/technology/sub-info-section/sub-info-section.component';
import { QuestionSectionComponent } from './components/technology/question-section/question-section.component';
import { FooterComponent } from './components/technology/footer/footer.component';
import { TechnologyGirdSystemComponent } from './components/technology/technology-gird-system/technology-gird-system.component';
import { JiraGridSectionComponent } from './components/technology/jira-grid-section/jira-grid-section.component';
import { IbmGirdSectionComponent } from './components/technology/ibm-gird-section/ibm-gird-section.component';

@NgModule({
  declarations: [
    TechnologyComponent,
    InfoSectionComponent,
    SubInfoSectionComponent,
    QuestionSectionComponent,
    FooterComponent,
    HeroSectionComponent,
    TechnologyGirdSystemComponent,
    JiraGridSectionComponent,
    IbmGirdSectionComponent,
  ],
  imports: [CommonModule, TechnologyRoutingModule],
  exports: [QuestionSectionComponent],
})
export class TechnologyModule {}
