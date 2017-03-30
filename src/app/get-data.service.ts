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

  addPlot(newPlot: SecretPlot) {
    this.secretPlots.push(newPlot);
  }

  // TODO: integrate dynamic pages and update plot and blog.
  // getPlotById(plotId: string) {
  //   return this.angularFire.database.object('/secretPlots/' + plotId);
  // }
  //
  // updatePlot(localUpdatedPlot) {
  //   var plotEntryInFirebase = this.getPlotById(localUpdatedPlot.$key);
  //   plotEntryInFirebase.update({localUpdatedPlot.blog});
  // }
}
