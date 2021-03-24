import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren:()=>import('./landing/landing.module').then(m=>m.LandingModule)
  },
  {
    path:"devops",
    loadChildren:()=>import('./devops/devops.module').then(m=>m.DevopsModule)
  },
  {
    path:"infrastructure",
    loadChildren:()=>import('./infrastructure/infrastructure.module').then(m=>m.InfrastructureModule)
  },
  {
    path:"consulting",
    loadChildren:()=>import('./consultancy/consultancy.module').then(m=>m.ConsultancyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
