import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMarqueeModule } from 'ng-marquee';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';

//components

import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContentComponent } from './content.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';
import { ClientsComponent } from "./components/clients/clients.component";

@NgModule({
  declarations: [
    ContentComponent,
    HeroComponent,
    FeaturedComponent,
    AboutComponent,
    ServiceSectionComponent,
    CtaSectionComponent,
    TeamSectionComponent,
    ClientsComponent,
    ServicesComponent,
    PortfolioComponent,

  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    NgMarqueeModule
  ],
  exports: [
    ClientsComponent,
  ]
})
export class LandingModule { }
