import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideospeedComponent } from './videospeed/videospeed.component';
import { TimesComponent } from './times/times.component';

@NgModule({
  declarations: [
    AppComponent,
    VideospeedComponent,
    TimesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
