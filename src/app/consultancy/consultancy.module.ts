import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy-routing.module';
import { ConsultancyComponent } from './components/consultancy/consultancy.component';
import { HeroSectionComponent } from './components/consultancy/hero-section/hero-section.component';
import { InfoSectionComponent } from './components/consultancy/info-section/info-section.component';
import { QuestionSectionComponent } from './components/consultancy/question-section/question-section.component';



@NgModule({
  declarations: [ConsultancyComponent, HeroSectionComponent, InfoSectionComponent, QuestionSectionComponent,  ],
  imports: [
    CommonModule,
    ConsultancyRoutingModule,
    SharedModule
  ]
})
export class ConsultancyModule { }
