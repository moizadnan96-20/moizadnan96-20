
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { HeroSectionComponent } from './components/product/hero-section/hero-section.component';
import { AnchorSectionComponent } from './components/product/anchor-section/anchor-section.component';

@NgModule({
  declarations: [HeroSectionComponent, ProductComponent, AnchorSectionComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
