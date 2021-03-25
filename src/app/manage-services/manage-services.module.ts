import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageServicesRoutingModule } from './manage-services-routing.module';
import { ManageServicesComponent } from './component/manage-services/manage-services.component';


@NgModule({
  declarations: [ManageServicesComponent],
  imports: [
    CommonModule,
    ManageServicesRoutingModule
  ]
})
export class ManageServicesModule { }
