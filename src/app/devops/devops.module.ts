import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevopsRoutingModule } from './devops-routing.module';
import { DevopComponent } from './components/devop/devop.component';


@NgModule({
  declarations: [DevopComponent],
  imports: [
    CommonModule,
    DevopsRoutingModule
  ]
})
export class DevopsModule { }
