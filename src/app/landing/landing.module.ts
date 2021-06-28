import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMarqueeModule } from 'ng-marquee';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';


//components

import { ServicesComponent } from './components/services/services.component';

import { ContentComponent } from './content.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';

import { ClientsComponent } from "./components/clients/clients.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoSectionComponent } from './info-section/info-section.component';

@NgModule({
  declarations: [
    ContentComponent,
    HeroComponent,
    FeaturedComponent,
    AboutComponent,
    ServiceSectionComponent,
   
    ClientsComponent,
    ServicesComponent,
   
    InfoSectionComponent

  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    NgMarqueeModule,
    NgbModule,
  ],
  exports: [
    ClientsComponent,
  ]
})
export class LandingModule { }
