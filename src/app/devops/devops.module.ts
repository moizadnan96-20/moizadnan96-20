import { SharedModule } from './../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevopsRoutingModule } from './devops-routing.module';
import { DevopComponent } from './components/devop/devop.component';
import { QuestionSectionComponent } from './components/question-section/question-section.component';
import { DevopHeroComponent } from './components/devop/devop-hero/devop-hero.component';
import { DevopInfoSectionComponent } from './components/devop/devop-info-section/devop-info-section.component';



@NgModule({
  declarations: [DevopComponent,QuestionSectionComponent, DevopHeroComponent, DevopInfoSectionComponent,],
  imports: [
    CommonModule,
    DevopsRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class DevopsModule { }
