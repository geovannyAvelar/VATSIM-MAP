import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFOSAkr4HcF3n-j8rDLvSiYjN1KrJvhUg'
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
