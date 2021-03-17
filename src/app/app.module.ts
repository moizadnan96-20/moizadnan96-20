import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { HeroComponent } from './components/content/hero/hero.component';
import { FeaturedComponent } from './components/content/featured/featured.component';
import { AboutComponent } from './components/content/about/about.component';
import { ServiceSectionComponent } from './components/content/service-section/service-section.component';
import { CtaSectionComponent } from './components/content/cta-section/cta-section.component';
import { TeamSectionComponent } from './components/content/team-section/team-section.component';
import { ClientsComponent } from "./components/content/clients/clients.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HeroComponent,
    FeaturedComponent,
    AboutComponent,
    ServiceSectionComponent,
    CtaSectionComponent,
    TeamSectionComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
