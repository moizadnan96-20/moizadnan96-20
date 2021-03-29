import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy-routing.module';
import { ConsultancyComponent } from './components/consultancy/consultancy.component';
import { HeroSectionComponent } from './components/consultancy/hero-section/hero-section.component';
import { InfoSectionComponent } from './components/consultancy/info-section/info-section.component';
import { QuestionSectionComponent } from './components/consultancy/question-section/question-section.component';
import { TestimonialSectionComponent } from './components/consultancy/testimonial-section/testimonial-section.component';
import { FooterSectionComponent } from './components/consultancy/footer-section/footer-section.component';


@NgModule({
  declarations: [ConsultancyComponent, HeroSectionComponent, InfoSectionComponent, QuestionSectionComponent, TestimonialSectionComponent, FooterSectionComponent],
  imports: [
    CommonModule,
    ConsultancyRoutingModule
  ]
})
export class ConsultancyModule { }
