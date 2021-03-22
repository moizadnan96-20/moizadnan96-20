import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Components
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
import { ServicesComponent } from './components/content/services/services.component';
import { PortfolioComponent } from './components/content/portfolio/portfolio.component';
import { NgMarqueeModule } from 'ng-marquee';

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
    ClientsComponent,
    ServicesComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgMarqueeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
