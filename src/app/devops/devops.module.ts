import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevopsRoutingModule } from './devops-routing.module';
import { DevopComponent } from './components/devop/devop.component';
import { QuestionSectionComponent } from './components/question-section/question-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';


@NgModule({
  declarations: [DevopComponent,QuestionSectionComponent,FooterSectionComponent],
  imports: [
    CommonModule,
    DevopsRoutingModule,
    NgbModule
  ]
})
export class DevopsModule { }
