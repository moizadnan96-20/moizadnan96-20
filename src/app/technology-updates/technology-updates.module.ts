import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../shared/shared.module';

import { InfrastructureModule } from './../infrastructure/infrastructure.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyUpdatesRoutingModule } from './technology-updates-routing.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { TechnologyUpdatesComponent } from './technology-updates.component';
import { TechnologyQuestionsComponent } from './components/technology-questions/technology-questions.component';
import { TechnologyworkSectionComponent } from './components/technologywork-section/technologywork-section.component';





@NgModule({
  declarations: [HeroSectionComponent, InfoSectionComponent, TechnologyUpdatesComponent, TechnologyQuestionsComponent, TechnologyworkSectionComponent, ],
  imports: [
    CommonModule,
    TechnologyUpdatesRoutingModule,

    InfrastructureModule,
    SharedModule,
    NgbModule

  ]
})
export class TechnologyUpdatesModule { }
