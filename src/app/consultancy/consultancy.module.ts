import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultancyRoutingModule } from './consultancy-routing.module';
import { ConsultancyComponent } from './components/consultancy/consultancy.component';


@NgModule({
  declarations: [ConsultancyComponent],
  imports: [
    CommonModule,
    ConsultancyRoutingModule
  ]
})
export class ConsultancyModule { }
