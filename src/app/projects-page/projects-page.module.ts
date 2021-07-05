import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsPageRoutingModule } from './projects-page-routing.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProjectsPageComponent } from './projects-page.component';
import { IndustryPageComponent } from './industry-page/industry-page.component';
import { SoftwareProductsPageComponent } from './software-products-page/software-products-page.component';
import { TechnologyPageComponent } from './technology-page/technology-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { ContactUsModule } from '../contact-us/contact-us.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HeroSectionComponent, ProjectsPageComponent, IndustryPageComponent, SoftwareProductsPageComponent, TechnologyPageComponent, HelpPageComponent],
  imports: [
    CommonModule,
    ProjectsPageRoutingModule,
    SharedModule,
    ContactUsModule,
    //NgxIntlTelInputModule,
    ReactiveFormsModule,
   // BsDropdownModule,
    NgbModule
  ]
})
export class ProjectsPageModule { }
