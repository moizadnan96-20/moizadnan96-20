import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMarqueeModule } from 'ng-marquee';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgMarqueeModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
