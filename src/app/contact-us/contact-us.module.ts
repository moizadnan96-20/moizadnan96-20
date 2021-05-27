import { ProductsModule } from './../products/products.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { DetailContactUsComponent } from './detail-contact-us/detail-contact-us.component';


@NgModule({
  declarations: [ContactUsComponent, DetailContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ProductsModule
  ]
})
export class ContactUsModule { }
