import { Component } from '@angular/core';
import { GardenPlotComponent } from './garden-plot/garden-plot.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Secret Plot 2.0';
  lat: number = 45.470266;
  lng: number = -122.720072;

  secretPlots: SecretPlot[] = [
  new SecretPlot("Gabriel Community Orchard", 45.470266, -122.720072, 'Located adjacent to Gabriel Community Garden at 4151 SW Canby St in Southwest Portland, Gabriel Community Orchard is home to more than 40 mature fruit trees, the perfect orchard for any apple lover. ', 'big', [' apples', ' other'], [{plotter: 'Bob', message:'Im way down here!'},{plotter: 'Tina', message: 'Ya me too!'}], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUiQPVyWWRBCg7hBAIb98v39Q2b8npwOvrlmNczALdtdw_yJ2Aqw"),

  new SecretPlot("Parkrose Community United Church of Christ", 45.534277, -122.533966, 'Parkrose Community Orchard is our fifth and newest orchard. Located on the property of Parkrose Community United Church of Christ, it is home to about 30 fruit trees and dozens of understory and native plants.', 'big',[' apples', ' other'],[{plotter: 'Bob', message:'Mmm native plants!'},{plotter: 'Tina', message: 'Wow!'}], "http://static.wixstatic.com/media/1e525e_a4b972a893e948e2960bab4057fd1735~mv2_d_4272_2848_s_4_2.jpg"),

  new SecretPlot("Sabin Community Orchard", 45.553035, -122.647525, 'Fourteen new fruit trees were planted in 2010 and 2011, to accompany two existing cherry trees and an apple tree. In 2011 we established under-story plantings around each fruit tree, water catching swales along the slope, sheet mulch, edging, and signs at both entrances.', 'big', [' cherries', ' apples'], [{plotter: 'Steve', message:'I can has cherries!'},{plotter: 'Tina', message: 'Watch our for Ceiling-Cat!'}], "http://media.virbcdn.com/cdn_images/resize_1024x1024/80/96c764e42a22fa16-Sabin4.jpg"),

  new SecretPlot("Green Thumb Community Orchard",45.562162, -122.644807, "Owned by Portland Parks and Recreation, and co-operatively managed by Portland Community Gardens and the Portland Fruit Tree Project, the Green Thumb Orchard is a historic orchard that hosts a great deal of activities. PFTP's Green Thumb Stewards maintain the orchard's trees, and share in the harvest through our harvesting parties.", 'big', ['fruit'], [{plotter: 'Bob', message:'Im way down here!'},{plotter: 'Tina', message: 'Ya so low!'}], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVeL1fAH9BBJLofwB1W5pBlq0pX12k96HalCDvZaKZ8CHqdAbe"),

  new SecretPlot("Fruits of Diversity Community Orchard", 45.590446, -122.711207, 'Currently, the orchard is home to over 40 fruit trees, dozens of edible shrubs, and countless understory and companion plants and will continue to grow each year! ', ' big', [' fruits', ' edible shrubs' ], [{plotter: 'Bob', message:'I love this garden!'},{plotter: 'Tina', message: 'Ya me too!'}], "http://media.virbcdn.com/cdn_images/resize_1024x1365/32/78b2f366f19c2edb-FruitsofDiversity.JPG"),

  new SecretPlot("Egleston Community Orchard", 42.314182, -71.101638, "Situated on a parcel at 195 Boylston Street, Egleston Community Orchard (ECO) is a neighbor-led effort for sustainable urban agriculture and community green space, promoting environmental justice and community ownership of land in Egleston Square. ECO hopes to continue to engage the full diversity of Egleston Square, including youth, and frequently hosts cultural events and workshops open to the general public. Find out more about ECO.", 'big', [' fruits', ' berries', 'herbs', 'rain water'], [{plotter: 'Carlos', message:'I miss my Boston peeps!'},{plotter: 'Orion', message: 'Come get dirty with us!'}], "https://www.transitionculture.org/wp-content/uploads/JP-Egleston-Community-Orchard.jpg"),

  new SecretPlot("Boston Nature Center", 42.288211, -71.101274, "In partnership with the Boston Nature Center, we are building a food forest in stages, focusing on a few centerpiece projects each year that offer valuable educational demonstration opportunities. We have spent this past growing season enriching the health of the soil through sheet mulching and the planting of nitrogen-fixing plants.", 'big', [' fruits', ' berries', 'herbs', 'leafy greens'], [{plotter: 'Carlos', message:'Happy wedding BoBo so sorry I missed it!'},{plotter: 'Bonnie', message: 'Spankings will continue until morale improves!'}], "https://farm9.staticflickr.com/8847/18232153642_68382e05c6.jpg"),

];
  // var secretPlots= [secretPlotPCUCC, secretPlotGCO, secretPlotGTCO, secretPlotSCO, secretPlotFOD, secretPlotECO, secretPlotBNC];
}

export class SecretPlot {

  wateringStatus: number = 0;
  constructor(public plotName: string, public latitude: number, public longitude: number, public description: string, public plotSize: string, public produce: string[], public blog: any, public imgUrl: string) {}

  // TODO add imgUrl: string to constructor and get images.
  // TODO create function watering Status here.

}
