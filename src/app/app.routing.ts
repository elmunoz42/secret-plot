import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { GardenPlotComponent } from './garden-plot/garden-plot.component';
import { GetDataService } from './get-data.service';

const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'gardens/',
    component: GardenPlotComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
