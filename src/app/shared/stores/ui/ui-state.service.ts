import { Injectable } from '@angular/core';
import { UiStateStore } from './ui-state.store';
import { UiStateQuery } from './ui-state.query';
import {
  map,
  distinctUntilChanged,
  filter,
  debounceTime,
  startWith,
  take,
} from 'rxjs/operators';
import { merge } from 'rxjs';
import { ConfirmationService } from 'primeng/api';
import { SwUpdate } from '@angular/service-worker';
import {
  NtsServiceWorkerService,
  NtsVersionManagementService,
} from '$services';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UiStateService {
  /** Is an app update available, either from the service worker or the version checker */
  public updateAvailable$ = merge(
    this.ntsSw.updateAvailable$,
    this.ntsVersion.updateAvailable$,
  );

  public form1003 = this.fb.group({
    loanType: null, //string
    email: null, //string
    phone1: null, //string
    firstName: null, //string
    lastName: null, //string
    propertyUse: null, //string
    propertyType: null, //string
    propertyAddress: null,
    propertyCity: null,
    propertyState: null,
    propertyZip: null,
    propertyCounty: null,
    mailingAddress: null,
    mailingCity: null,
    mailingState: null,
    mailingZip: null,
    mailingCounty: null,
    propertyValue: null, //number
    estimatedHomeValue: null,
    occupancyType: null, //boolean
    creditProfile: null, //string
    isMilitary: null,
    bankruptcy: null,
    loanAmount: null,
    loanPurpose: null,
    // Notes fields
    notes: null,
    PurchaseTimeline: null,
    DownPayment: null,
    FirstTimeHomeBuyer: null,
    Loan: null
  });

  public progressPercent$ = this.query
    .select(state => state.pageCounter)
    .pipe(
      map(count => {
        const loanType = this.form1003.value.loanType
          ? this.form1003.value.loanType.toLowerCase()
          : null;
        switch (loanType) {
          case 'purchase':
            return Math.floor((count / 12) * 100); // Total # of purchase paths
          case 'refinance':
            return Math.floor((count / 16) * 100); // Total # of refinance paths
          default:
            return 0;
        }
      }),
      startWith(0),
      distinctUntilChanged(),
    );

  /** State of current UI store */
  public uiState$ = this.query.select();
  /** Return the active tab of the specified tab instance */
  public tabActive$ = (tabInstanceId: string) =>
    this.query
      .select(state => state.tabsActive)
      .pipe(
        map(val => (val && val[tabInstanceId] ? val[tabInstanceId] : 0)),
        distinctUntilChanged(),
      );
  /** Return the toggle state of the specificed prop */
  public toggles$ = (toggleProp: string) =>
    this.query
      .select(state => state.toggles)
      .pipe(
        map(val => (val && val[toggleProp] !== null ? val[toggleProp] : null)),
        filter(val => typeof val !== 'undefined'),
        distinctUntilChanged(),
      );

  // /** Load form data of current path variable */
  // public loadValue$ = this.query
  //   .select(state => state.currentPathVariable)
  //   .pipe(
  //     map(path => {
  //       let pathVar = path.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
  //       if(pathVar === 'name') {
  //         if(this.form1003.value.hasOwnProperty('nameFirst')) {
  //           return {
  //             first: this.form1003.value.nameFirst,
  //             last: this.form1003.value.nameLast
  //           }
  //         }
  //       }
  //       if(this.form1003.value.hasOwnProperty(pathVar)) {
  //           return this.form1003.value[pathVar]
  //       }
  //     }),
  //     startWith(0),
  //     distinctUntilChanged(),
  //   );
  constructor(
    private store: UiStateStore,
    private query: UiStateQuery,
    private confirmationService: ConfirmationService,
    private sw: SwUpdate,
    private ntsSw: NtsServiceWorkerService,
    private ntsVersion: NtsVersionManagementService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) {
    // this.query.uiState$.subscribe(state => console.log('UI STATE', state));
    this.updateAvailable$
      .pipe(filter(val => val))
      .subscribe(() => this.updateAppModal());

    this.form1003.valueChanges
      .pipe(debounceTime(500))
      .subscribe(form => this.toggles('form', form));

    // Rehydrate the form with any saved data
    this.query
      .select()
      .pipe(take(1))
      .subscribe(state => this.form1003.patchValue(state.formData));

    this.query.select().subscribe(res => console.log(res.formData));
  }

  //  /**
  //  * Set active route for loading
  //  * @param route
  //  */
  // public setPathVariable(route: string) {
  //   this.store.update(store => {
  //     return {
  //       ...store,
  //       currentPathVariable: route
  //     }
  //   })
  // }

  /**
   * Go to the next route
   * @param route
   * @param formData
   */
  public routeGoTo(route: string, formData: Record<string, any> = {}) {
    // Update form data
    console.log(formData)
    
    this.form1003.patchValue(formData);
    // Update the store properties
    this.store.update(store => {
      return {
        ...store,
        formData: this.form1003.value,
        pageCounter: store.pageCounter + 1,
        path: [
          ...store.path,
          { path: route, formProps: Object.keys(formData) },
        ],
      };
    });
    // Go to next route
    this.router.navigate([route]);
  }

  /**
   * Go to previous route in path
   */
  public routeBack() {
    let routePrevious: { path?: string; formProps?: string[] | null } = {};
    // Update the store properties
    this.store.update(store => {
      // Remove the last item from the path
      const pathNew = [...store.path].slice(0, -1); //
      // Get the new last item
      routePrevious = pathNew[pathNew.length - 1];
      if (routePrevious && routePrevious.path) {
        this.router.navigate([routePrevious.path]);
        return {
          ...store,
          formData: this.form1003.value,
          pageCounter: store.pageCounter - 1,
          path: pathNew,
        };
      }
      return store;
    });
  }


  /**
   * Submit a lead to the backend
   * @param lead
   */
  public leadSubmit(formData: Record<string, any> = {}, lead?: any) {
    this.form1003.patchValue(formData);
    let noteString = ''
      let keys = Object.keys(this.form1003.value)
      keys.forEach((key:string) => {
        // If Notes, convert object into string
        if(key.charAt(0) === key.charAt(0).toUpperCase() ) {
          // convert camelCase to Camel Case for readability
          let keyTitle = key.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2")
          noteString += (`${keyTitle}: ${this.form1003.value[key]},\n`)
          this.form1003.removeControl(key)
        }
      })
      // Add note string to form
      this.form1003.patchValue({notes: noteString})
      console.log(this.form1003.value)
      this.http
      .post('/api/somewhere', lead, this.form1003.value)
      .subscribe(() => {
        this.form1003.reset();
        window.location.href = '/?src=1003';
      });
    }
   

  /**
   * A generic dictionary for simple key/value pair state changes
   * IE: this.ui.toggles('sidebarOpen', true);
   * &&: this.ui.query.toggles$('sidebarOpen');
   * @param toggleProp
   * @param toggleValue
   */
  public toggles(toggleProp: string, toggleValue: any) {
    this.store.update(store => {
      const toggles = { ...store.toggles };
      toggles[toggleProp] = toggleValue;
      return <UIState>{
        ...store,
        toggles: toggles,
      };
    });
  }

  public updateAppModal() {
    this.confirmationService.confirm({
      message:
        'An update for this application is available, would you like to update?',
      header: 'Confirmation',
      accept: () =>
        this.sw.isEnabled
          ? this.sw.activateUpdate().then(() => document.location.reload())
          : document.location.reload(),
      // reject: () => console.log('Nope!!!'),
    });
  }

  /**
   * Reset store state
   */
  public reset() {
    this.store.reset();
  }
}
