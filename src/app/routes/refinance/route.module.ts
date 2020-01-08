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
import { RefinancePropertyComponent } from './routes/refinance-property/refinance-property.component';
import { PropertyUsageRefinanceComponent } from './routes/property-usage/property-usage-refinance.component';
import { RefinanceReasonComponent } from './routes/refinance-reason/refinance-reason.component';
import { PropertyPriceRefinanceComponent } from './routes/property-price-refinance/property-price-refinance.component';
import { MortgagePriceRefinanceComponent } from './routes/mortgage-price-refinance/mortgage-price-refinance.component';
import { BorrowCashRefinanceComponent } from './routes/borrow-cash-refinance/borrow-cash-refinance.component';
import { BorrowAmountRefinanceComponent } from './routes/borrow-amount-refinance/borrow-amount-refinance.component';
import { ZipCodeComponent } from './routes/zip-code/zip-code.component';
import { CreditScoreRefinanceComponent } from './routes/credit-score-refinance/credit-score-refinance.component';
import { RefinanceMilitaryComponent } from './routes/refinance-military/refinance-military.component';
import { LoanComponent } from './routes/loan/loan.component';
import { RefinanceBankruptcyComponent } from './routes/refinance-bankruptcy/refinance-bankruptcy.component';
import { RefinanceCurrentAddressComponent } from './routes/refinance-current-address/refinance-current-address.component';
import { RefinanceNameComponent } from './routes/refinance-name/refinance-name.component';
import { RefinanceEmailComponent } from './routes/refinance-email/refinance-email.component';
import { RefinancePasswordComponent } from './routes/refinance-password/refinance-password.component';
import { NumberComponent } from './routes/number/number.component';

export const storeName = 'route-UIState'; // Change this property to be unique & route specific, IE 'route-UIState' => 'dashboard-UIState'

@NgModule({
  imports: [CommonModule, SiteModule, routing],
  declarations: [
    RootComponent,
    RefinancePropertyComponent,
    PropertyUsageRefinanceComponent,
    RefinanceReasonComponent,
    PropertyPriceRefinanceComponent,
    MortgagePriceRefinanceComponent,
    BorrowCashRefinanceComponent,
    BorrowAmountRefinanceComponent,
    ZipCodeComponent,
    CreditScoreRefinanceComponent,
    RefinanceMilitaryComponent,
    LoanComponent,
    RefinanceBankruptcyComponent,
    RefinanceCurrentAddressComponent,
    RefinanceNameComponent,
    RefinanceEmailComponent,
    RefinancePasswordComponent,
    NumberComponent,
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
export class RefinanceModule {}
