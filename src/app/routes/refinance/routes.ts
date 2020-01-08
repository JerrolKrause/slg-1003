import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './routes/root/root.component';
import { RefinancePropertyComponent } from './routes/refinance-property/refinance-property.component';
import { PropertyUsageRefinanceComponent } from './routes/property-usage/property-usage-refinance.component';
import { ZipCodeComponent } from './routes/zip-code/zip-code.component';
import { RefinanceReasonComponent } from './routes/refinance-reason/refinance-reason.component';
import { BorrowCashRefinanceComponent } from './routes/borrow-cash-refinance/borrow-cash-refinance.component';
import { BorrowAmountRefinanceComponent } from './routes/borrow-amount-refinance/borrow-amount-refinance.component';
import { PropertyPriceRefinanceComponent } from './routes/property-price-refinance/property-price-refinance.component';
import { CreditScoreRefinanceComponent } from './routes/credit-score-refinance/credit-score-refinance.component';
import { RefinanceMilitaryComponent } from './routes/refinance-military/refinance-military.component';
import { LoanComponent } from './routes/loan/loan.component';
import { RefinanceBankruptcyComponent } from './routes/refinance-bankruptcy/refinance-bankruptcy.component';
import { RefinanceCurrentAddressComponent } from './routes/refinance-current-address/refinance-current-address.component';
import { RefinanceNameComponent } from './routes/refinance-name/refinance-name.component';
import { RefinanceEmailComponent } from './routes/refinance-email/refinance-email.component';
import { NumberComponent } from './routes/number/number.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    data: { title: 'Root' },
  },
  {
    path: 'property-type',
    component: RefinancePropertyComponent,
    data: { title: 'Property Type' },
  },
  {
    path: 'property-usage',
    component: PropertyUsageRefinanceComponent,
    data: { title: 'Property Usage' },
  },
  {
    path: 'property-refinance',
    component: RefinanceReasonComponent,
    data: { title: 'Property Refinance' },
  },
  {
    path: 'zip-code',
    component: ZipCodeComponent,
    data: { title: 'Zip Code' },
  },
  {
    path: 'property-price',
    component: PropertyPriceRefinanceComponent,
    data: { title: 'Property Price' },
  },
  {
    path: 'borrow-cash',
    component: BorrowCashRefinanceComponent,
    data: { title: 'Borrow Cash' },
  },
  {
    path: 'borrow-amount',
    component: BorrowAmountRefinanceComponent,
    data: { title: 'Borrow Amount' },
  },
  {
    path: 'credit-score',
    component: CreditScoreRefinanceComponent,
    data: { title: 'Credit Score' },
  },
  {
    path: 'military',
    component: RefinanceMilitaryComponent,
    data: { title: 'Military' },
  },
  {
    path: 'loan',
    component: LoanComponent,
    data: { title: 'Loan' },
  },
  {
    path: 'bankruptcy',
    component: RefinanceBankruptcyComponent,
    data: { title: 'Bankruptcy' },
  },
  {
    path: 'current-address',
    component: RefinanceCurrentAddressComponent,
    data: { title: 'Current Address' },
  },
  {
    path: 'name',
    component: RefinanceNameComponent,
    data: { title: 'Name' },
  },
  {
    path: 'email',
    component: RefinanceEmailComponent,
    data: { title: 'Email' },
  },
  {
    path: 'number',
    component: NumberComponent,
    data: { title: 'Number' },
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
