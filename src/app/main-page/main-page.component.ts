import { Component, OnInit } from '@angular/core';
import { GardenPlotComponent } from '../garden-plot/garden-plot.component'
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { GetDataService } from '../get-data.service';
import { SecretPlot } from '../app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetDataService]
})

export class MainPageComponent implements OnInit {
  secretPlots;
  title = 'Secret Plot';
  lat = 45.470266;
  lng = -122.720072;

  constructor(private dataService: GetDataService ) {}

  ngOnInit() {

    this.dataService.fetchData().subscribe(
      data => this.secretPlots = data
    );

  }

  submitForm(plotName: string, latitude: any, longitude: any, description: string, plotSize: string, produce: string[], imgUrl: string) {
    let newPlot: SecretPlot = new SecretPlot(plotName, parseFloat(latitude), parseFloat(longitude), description, plotSize, ["vegetable"], [{plotter: 'Bob', message:'test'},{plotter: 'Tina', message: 'tester'}], imgUrl);
    this.dataService.addPlot(newPlot);
  }


}
