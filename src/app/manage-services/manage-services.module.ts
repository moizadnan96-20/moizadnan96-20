import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageServicesRoutingModule } from './manage-services-routing.module';
import { ManageServicesComponent } from './components/manage-services/manage-services.component';
import { HeroComponent } from './components/manage-services/hero/hero.component';
import { InfoSectionComponent } from './components/manage-services/info-section/info-section.component';
import { QuestionSectionComponent } from './components/manage-services/question-section/question-section.component';
import { TestimonialSectionComponent } from './components/manage-services/testimonial-section/testimonial-section.component';



@NgModule({
  declarations: [ManageServicesComponent, HeroComponent, InfoSectionComponent, QuestionSectionComponent, TestimonialSectionComponent,  ],
  imports: [
    CommonModule,
    ManageServicesRoutingModule,
    SharedModule,
    NgbModule,
  ]
})
export class ManageServicesModule { }
