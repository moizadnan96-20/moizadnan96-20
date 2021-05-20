import { InfrastructureModule } from './../infrastructure/infrastructure.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyUpdatesRoutingModule } from './technology-updates-routing.module';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { TechnologyUpdatesComponent } from './technology-updates.component';
import { TechnologyModule } from '../technology/technology.module';


@NgModule({
  declarations: [HeroSectionComponent, InfoSectionComponent, TechnologyUpdatesComponent],
  imports: [
    CommonModule,
    TechnologyUpdatesRoutingModule,

    InfrastructureModule

  ]
})
export class TechnologyUpdatesModule { }
