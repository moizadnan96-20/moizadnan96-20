import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"devops",
    loadChildren:()=>import('./devops/devops.module').then(m=>m.DevopsModule)
  },
  {
    path:"infrastructure",
    loadChildren:()=>import('./infrastructure/infrastructure.module').then(m=>m.InfrastructureModule)
  },
  {
    path:"it-consultancy",
    loadChildren:()=>import('./consultancy/consultancy.module').then(m=>m.ConsultancyModule)
  },
  {
    path:"manage-services",
    loadChildren:()=>import('./manage-services/manage-services.module').then(m=>m.ManageServicesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
