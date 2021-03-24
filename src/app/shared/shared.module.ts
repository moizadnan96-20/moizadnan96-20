import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgMarqueeModule } from 'ng-marquee';

//components

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    NgMarqueeModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
