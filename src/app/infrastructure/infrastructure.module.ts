import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfrastructureRoutingModule } from './infrastructure-routing.module';
import { InfrastructureComponent } from './component/infrastructure/infrastructure.component';


@NgModule({
  declarations: [InfrastructureComponent],
  imports: [
    CommonModule,
    InfrastructureRoutingModule
  ]
})
export class InfrastructureModule { }
