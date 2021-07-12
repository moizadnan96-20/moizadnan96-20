import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustryPageComponent } from './industry-page/industry-page.component';

import { SoftwareProductsPageComponent } from './software-products-page/software-products-page.component';
import { TechnologyPageComponent } from './technology-page/technology-page.component';


const routes: Routes = [
  {
    path: '',
    component: IndustryPageComponent,
  },
  {
    path: 'software-products',
    component: SoftwareProductsPageComponent,
  },
  {
    path: 'technology',
    component: TechnologyPageComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsPageRoutingModule {}
