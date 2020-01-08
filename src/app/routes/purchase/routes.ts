import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './routes/root/root.component';
import { PropertyTypeComponent } from './routes/property-type/property-type.component';
import { PropertyUsageComponent } from './routes/property-usage/property-usage.component';
import { PropertyRefinanceComponent } from './routes/property-refinance/property-refinance.component';
import { PropertyLocationComponent } from './routes/property-location/property-location.component';
import { PurchaseTimelineComponent } from './routes/purchase-timeline/purchase-timeline.component';
import { DownPaymentComponent } from './routes/down-payment/down-payment.component';
import { FirstTimeComponent } from './routes/first-time/first-time.component';
import { EmploymentComponent } from './routes/employment/employment.component';
import { MilitaryComponent } from './routes/military/military.component';
import { BankruptcyComponent } from './routes/bankruptcy/bankruptcy.component';
import { CurrentAddressComponent } from './routes/current-address/current-address.component';
import { NameComponent } from './routes/name/name.component';
import { EmailComponent } from './routes/email/email.component';
import { CreditScoreComponent } from './routes/credit-score/credit-score.component';
import { FinalizeComponent } from './routes/finalize/finalize.component';

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
    path: 'purchase-timeline',
    component: PurchaseTimelineComponent,
    data: { title: 'Purchase Timeline' },
  },
  {
    path: 'property-refinance',
    component: PropertyRefinanceComponent,
    data: { title: 'Property Refinance' },
  },
  {
    path: 'down-payment',
    component: DownPaymentComponent,
    data: { title: 'Down Payment' },
  },
  {
    path: 'first-time',
    component: FirstTimeComponent,
    data: { title: 'First Time' },
  },
  {
    path: 'employment',
    component: EmploymentComponent,
    data: { title: 'Employment' },
  },
  {
    path: 'credit-score',
    component: CreditScoreComponent,
    data: { title: 'Credit Score' },
  },
  {
    path: 'military',
    component: MilitaryComponent,
    data: { title: 'Military' },
  },
  {
    path: 'bankruptcy',
    component: BankruptcyComponent,
    data: { title: 'Bankruptcy' },
  },
  {
    path: 'current-address',
    component: CurrentAddressComponent,
    data: { title: 'Current Address' },
  },
  {
    path: 'name',
    component: NameComponent,
    data: { title: 'Name' },
  },
  {
    path: 'email',
    component: EmailComponent,
    data: { title: 'Email' },
  },
  {
    path: 'finalize',
    component: FinalizeComponent,
    data: { title: 'Finalize' },
  },
  {
    path: '',
    component: RootComponent,
    data: { title: 'Root' },
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
