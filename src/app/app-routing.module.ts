import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsPageComponent } from './projects-page/projects-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },

  {
    path: 'devops',
    loadChildren: () =>
      import('./devops/devops.module').then((m) => m.DevopsModule),
  },
  {
    path: 'infrastructure',
    loadChildren: () =>
      import('./infrastructure/infrastructure.module').then(
        (m) => m.InfrastructureModule
      ),
  },
  {
    path: 'consulting',
    loadChildren: () =>
      import('./consultancy/consultancy.module').then(
        (m) => m.ConsultancyModule
      ),
  },
  {
    path: 'manage-services',
    loadChildren: () =>
      import('./manage-services/manage-services.module').then(
        (m) => m.ManageServicesModule
      ),
  },
  
  {
    path: 'aboutus',
    loadChildren: () =>
      import('./about-us/about-us.module').then((m) => m.AboutUsModule),
  },

  {
    path: 'tech-lead',
    loadChildren: () =>
      import('./tech-lead/tech-lead.module').then((m) => m.TechLeadModule),
  },
  {
    path: 'more',
    loadChildren: () =>
      import('./more/more.module').then((m) => m.MoreModule),
  },
 
  {
    path: 'technology',
    loadChildren: () =>
      import('./technology-updates/technology-updates.module').then((m) => m.TechnologyUpdatesModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
  },
  {
    path: 'projects',
    component:ProjectsPageComponent,
    loadChildren: () =>
      import('./projects-page/projects-page.module').then((m) => m.ProjectsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
