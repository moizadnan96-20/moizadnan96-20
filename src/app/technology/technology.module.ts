import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './components/technology/technology.component';
import { InfoSectionComponent } from './components/technology/info-section/info-section.component';
import { SubInfoSectionComponent } from './components/technology/sub-info-section/sub-info-section.component';
import { QuestionSectionComponent } from './components/technology/question-section/question-section.component';
import { FooterComponent } from './components/technology/footer/footer.component';



@NgModule({
  declarations: [TechnologyComponent, InfoSectionComponent, SubInfoSectionComponent, QuestionSectionComponent, FooterComponent, ],
  imports: [
    CommonModule,
    TechnologyRoutingModule
  ]
})
export class TechnologyModule { }
