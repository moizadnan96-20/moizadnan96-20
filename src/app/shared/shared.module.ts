import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgMarqueeModule } from 'ng-marquee';

//components

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';



@NgModule({
  declarations: [HeaderComponent,FooterComponent,FooterSectionComponent ],
  imports: [
    CommonModule,
    NgMarqueeModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    
    FooterSectionComponent
  ]
})
export class SharedModule { }
