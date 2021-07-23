import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMarqueeModule } from 'ng-marquee';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';

//components

import { ServicesComponent } from './components/services/services.component';

import { ContentComponent } from './content.component';

import { AboutComponent } from './components/about/about.component';

import { ClientsComponent } from './components/clients/clients.component';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoSectionComponent } from './info-section/info-section.component';

@NgModule({
  declarations: [
    ContentComponent,

    AboutComponent,

    ClientsComponent,
    ServicesComponent,

    InfoSectionComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    NgMarqueeModule,
    NgbModule,
  ],
  exports: [ClientsComponent],
})
export class LandingModule {}
