import { TechnologySectionComponent } from './component/infrastructure/technology-section/technology-section.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfrastructureRoutingModule } from './infrastructure-routing.module';
import { InfrastructureComponent } from './component/infrastructure/infrastructure.component';
import { HeroSectionComponent } from './component/infrastructure/hero-section/hero-section.component';
import { InfoSectionComponent } from './component/infrastructure/info-section/info-section.component';
import { QuestionSectionComponent } from './component/infrastructure/question-section/question-section.component';
import { FooterSectionComponent } from './component/infrastructure/footer-section/footer-section.component';
import { NetworkingSectionComponent } from './component/infrastructure/networking-section/networking-section.component';



@NgModule({
  declarations: [InfrastructureComponent, HeroSectionComponent, InfoSectionComponent, QuestionSectionComponent, FooterSectionComponent,TechnologySectionComponent, NetworkingSectionComponent ],
  imports: [
    CommonModule,
    InfrastructureRoutingModule
  ]
})
export class InfrastructureModule { }
