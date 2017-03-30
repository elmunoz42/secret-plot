import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GardenPlotComponent } from './garden-plot/garden-plot.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { masterApiKeys } from './api-keys';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: masterApiKeys.firebaseApiKey,
  authDomain: masterApiKeys.authDomain,
  databaseURL: masterApiKeys.databaseURL,
  storageBucket: masterApiKeys.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    GardenPlotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: masterApiKeys.googleMapsApiKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
