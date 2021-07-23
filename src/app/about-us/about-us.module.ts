import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingModule } from './../landing/landing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AboutHeroComponent } from './components/about-us/about-hero/about-hero.component';
import { AboutInfoComponent } from './components/about-us/about-info/about-info.component';


@NgModule({
  declarations: [AboutUsComponent, AboutHeroComponent, AboutInfoComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule,
    LandingModule,NgbModule
  ]
})
export class AboutUsModule { }
