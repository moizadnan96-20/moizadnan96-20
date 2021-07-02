
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { DetailContactUsComponent } from './detail-contact-us/detail-contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


@NgModule({
  declarations: [ContactUsComponent, DetailContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,

    

    SharedModule
  ], exports: [DetailContactUsComponent]
})
export class ContactUsModule { }
