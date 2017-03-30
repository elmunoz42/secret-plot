import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GardenPlotComponent } from './garden-plot/garden-plot.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    GardenPlotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDRQ_rKHZRvaZAEBYDniQKYszwYZP9FgQI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
