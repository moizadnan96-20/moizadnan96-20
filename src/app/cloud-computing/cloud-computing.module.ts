import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudComputingRoutingModule } from './cloud-computing-routing.module';
import { CloudComputingComponent } from './components/cloud-computing/cloud-computing.component';
import { HeroComponent } from './components/cloud-computing/hero/hero.component';
import { InfoSectionComponent } from './components/cloud-computing/info-section/info-section.component';
import { QuestionSectionComponent } from './components/cloud-computing/question-section/question-section.component';
import { TestimonialSectionComponent } from './components/cloud-computing/testimonial-section/testimonial-section.component';




@NgModule({
  declarations: [CloudComputingComponent, HeroComponent, InfoSectionComponent, QuestionSectionComponent, TestimonialSectionComponent, ],
  imports: [
    CommonModule,
    CloudComputingRoutingModule
  ]
})
export class CloudComputingModule { }
