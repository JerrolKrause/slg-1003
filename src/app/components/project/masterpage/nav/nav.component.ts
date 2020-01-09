import { Component } from '@angular/core';
import { AuthService } from '$shared';
import { Router, NavigationEnd } from '@angular/router';
import {
  filter,
  debounceTime,
  map,
  startWith,
  distinctUntilChanged,
} from 'rxjs/operators';
import { SettingsService } from '$settings';
import { AuthState } from 'src/app/shared/services/project';

import { MenuItem } from 'primeng/api';
import { fromEvent } from 'rxjs';
import { UiStateService } from '$ui';

const startCase = require('lodash/startCase');
const toLower = require('lodash/toLower');

@Component({
  selector: 'app-nav',
  styleUrls: ['./nav.component.scss'],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  /** Is the dropdown menu open on mobile */
  public isOpen = false;
  /** Turn the username into title case */
  public userName = startCase(toLower(this.settings.userName));
  /**   Does the app have an update */
  public hasUpdate$ = this.ui.updateAvailable$;
  /** App version */
  public version$ = this.settings.version$;

  public navMenu: MenuItem[] = [
    {
      label: 'Back',
      icon: 'fa fa-chevron-left mr-1',
      routerLink: '/',
      routerLinkActiveOptions: { exact: true },
    },
    // {
    //   label: 'Purchase',
    //   icon: 'fa fa-cubes mr-1',
    //   routerLink: '/purchase',
    // },
    // {
    //   label: 'Refinance',
    //   icon: 'fa fa-cubes mr-1',
    //   routerLink: '/refinance',
    // },
  ];

  public utilityMenu: MenuItem[] = [
    {
      label: 'Call us at 1-800-689-1057',
      // icon: 'fa fa-tachometer mr-1',
      // disabled: true,
    },
    // {
    //   label: 'Sign Out',
    //   icon: 'fa fa-cubes mr-1',
    //   command: () => this.logOut(),
    // },
  ];

  public sidebarVisible = false;

  /** Contains a boolean is the current screensize is above or below the mobile breakpoint */
  public isDesktop$ = fromEvent(window, 'resize').pipe(
    debounceTime(100),
    map(e => (e && e.target ? (<any>e).target.innerWidth : null)), // Extract window width
    startWith(window.innerWidth), // Start with window width
    map(width => (width >= 998 ? true : false)), // If window width is less than mobileBreakpoint return true
    distinctUntilChanged(), // Only update on changes
  );

  constructor(
    private auth: AuthService,
    private settings: SettingsService,
    public ui: UiStateService,
    private router: Router,
  ) {
    // On route change, if mobile nav is open close it
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => (this.sidebarVisible = false));
  }

  /**
   * Update application
   */
  public updateApp() {
    this.ui.updateAppModal();
  }

  /**
   * Log out
   */
  public logOut() {
    this.auth.logOut(AuthState.loggedOut);
  }
}
