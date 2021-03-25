import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudComputingRoutingModule } from './cloud-computing-routing.module';
import { CloudComputingComponent } from './components/cloud-computing/cloud-computing.component';


@NgModule({
  declarations: [CloudComputingComponent],
  imports: [
    CommonModule,
    CloudComputingRoutingModule
  ]
})
export class CloudComputingModule { }
