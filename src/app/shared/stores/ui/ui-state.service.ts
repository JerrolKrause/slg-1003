import { Injectable } from '@angular/core';
import { UiStateStore } from './ui-state.store';
import { UiStateQuery } from './ui-state.query';
import {
  map,
  distinctUntilChanged,
  filter,
  debounceTime,
  startWith,
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

@Injectable({ providedIn: 'root' })
export class UiStateService {
  /** Is an app update available, either from the service worker or the version checker */
  public updateAvailable$ = merge(
    this.ntsSw.updateAvailable$,
    this.ntsVersion.updateAvailable$,
  );

  public form1003 = this.fb.group({
    loanType: null,
    email: null,
    nameFirst: null,
    nameLast: null,
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

  constructor(
    private store: UiStateStore,
    private query: UiStateQuery,
    private confirmationService: ConfirmationService,
    private sw: SwUpdate,
    private ntsSw: NtsServiceWorkerService,
    private ntsVersion: NtsVersionManagementService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    // this.query.uiState$.subscribe(state => console.log('UI STATE', state));
    this.updateAvailable$
      .pipe(filter(val => val))
      .subscribe(() => this.updateAppModal());

    this.form1003.valueChanges
      .pipe(debounceTime(500))
      .subscribe(form => this.toggles('form', form));

    this.store.reset();
    this.query.select().subscribe(res => console.log(res));
  }

  /**
   * Go to the next route
   * @param route
   * @param formData
   */
  public routeGoTo(route: string, formData: Record<string, any> = {}) {
    // Update form data
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
      routePrevious = store.path[store.path.length - 1];

      return {
        ...store,
        formData: this.form1003.value,
        pageCounter: store.pageCounter - 1,
        path: [...store.path],
      };
    });
    if (routePrevious && routePrevious.path) {
      // Go to next route
      this.router.navigate([routePrevious.path]);
    }
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
