import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './routes/root/root.component';
import { PropertyTypeComponent } from './routes/property-type/property-type.component';
import { PropertyUsageComponent } from './routes/property-usage/property-usage.component';
import { PropertyLocationComponent } from './routes/property-location/property-location.component';

const routes: Routes = [
  {
    path: 'property-type',
    component: PropertyTypeComponent,
    data: { title: 'Property Type' },
  },
  {
    path: 'property-usage',
    component: PropertyUsageComponent,
    data: { title: 'Property Usage' },
  },
  {
    path: 'property-location',
    component: PropertyLocationComponent,
    data: { title: 'Property Location' },
  },
  {
    path: '',
    component: RootComponent,
    data: { title: 'Root' },
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
