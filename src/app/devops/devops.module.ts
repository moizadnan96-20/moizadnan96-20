import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevopsRoutingModule } from './devops-routing.module';
import { DevopComponent } from './components/devop/devop.component';
import { QuestionSectionComponent } from './components/question-section/question-section.component';



@NgModule({
  declarations: [DevopComponent,QuestionSectionComponent,],
  imports: [
    CommonModule,
    DevopsRoutingModule,
    NgbModule
  ]
})
export class DevopsModule { }
