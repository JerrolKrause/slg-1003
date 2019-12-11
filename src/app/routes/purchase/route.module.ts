import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteModule } from '$site'; // Site modules

// Routing
import { routing } from './routes';

// Components
import { RootComponent } from './routes/root/root.component';

// Route State Management
import {
  RouteUiStateQuery,
  RouteUiStateService,
  RouteUiStateStore,
} from './shared/state/ui';
import { RouteDomainStateService } from './shared/state/domain';
import { PropertyTypeComponent } from './routes/property-type/property-type.component';
import { PropertyUsageComponent } from './routes/property-usage/property-usage.component';
import { PropertyLocationComponent } from './routes/property-location/property-location.component';
import { NewHomeComponent } from './routes/new-home/new-home.component';
import { PurchaseTimelineComponent } from './routes/purchase-timeline/purchase-timeline.component';
import { RealEstateAgentComponent } from './routes/real-estate-agent/real-estate-agent.component';
import { PurchasePriceComponent } from './routes/purchase-price/purchase-price.component';
import { DownPaymentComponent } from './routes/down-payment/down-payment.component';
import { BankAccountsComponent } from './routes/bank-accounts/bank-accounts.component';
import { FirstTimeComponent } from './routes/first-time/first-time.component';
import { CoBorrowerComponent } from './routes/co-borrower/co-borrower.component';
import { AnnualIncomeComponent } from './routes/annual-income/annual-income.component';
import { EmploymentComponent } from './routes/employment/employment.component';
import { CreditScoreComponent } from './routes/credit-score/credit-score.component';
import { LocationOfBirthComponent } from './routes/location-of-birth/location-of-birth.component';
import { MilitaryComponent } from './routes/military/military.component';
import { BankruptcyComponent } from './routes/bankruptcy/bankruptcy.component';
import { CurrentAddressComponent } from './routes/current-address/current-address.component';
import { NameComponent } from './routes/name/name.component';
import { EmailComponent } from './routes/email/email.component';
import { FinalizeComponent } from './routes/finalize/finalize.component';

export const storeName = 'purchase-UIState'; 

@NgModule({
  imports: [CommonModule, SiteModule, routing],
  declarations: [
    RootComponent,
    PropertyTypeComponent,
    PropertyUsageComponent,
    PropertyLocationComponent,
    NewHomeComponent,
    PurchaseTimelineComponent,
    RealEstateAgentComponent,
    PurchasePriceComponent,
    DownPaymentComponent,
    BankAccountsComponent,
    FirstTimeComponent,
    CoBorrowerComponent,
    AnnualIncomeComponent,
    EmploymentComponent,
    CreditScoreComponent,
    LocationOfBirthComponent,
    MilitaryComponent,
    BankruptcyComponent,
    CurrentAddressComponent,
    NameComponent,
    EmailComponent,
    FinalizeComponent,
  ],
  providers: [
    RouteUiStateService,
    RouteUiStateStore,
    RouteUiStateQuery,
    RouteDomainStateService,
  ],
  exports: [],
  entryComponents: [],
})
export class PurchaseModule {}
