import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationListComponent } from './location/location-list/location-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    LocationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
