import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechLeadRoutingModule } from './tech-lead-routing.module';
import { TechLeadComponent } from './tech-lead.component';
import { InfoSectionComponent } from './components/info-section/info-section.component';
import { HeroComponent } from './components/hero/hero.component';


@NgModule({
  declarations: [TechLeadComponent,InfoSectionComponent,HeroComponent],
  imports: [
    CommonModule,
    TechLeadRoutingModule
  ]
})
export class TechLeadModule { }
