import { Injectable } from '@angular/core';
import { SecretPlot } from './app.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()

export class GetDataService {

  constructor(private angularFire: AngularFire) {
    this.secretPlots = angularFire.database.list('secretPlots');
  }

  secretPlots: FirebaseListObservable<any[]>;

  fetchData(){

    return this.secretPlots;
  }
}
