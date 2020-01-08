import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { map, filter, mergeMap } from 'rxjs/operators';

import { environment } from '$env';
import { UiStateService } from './shared/stores/ui/ui-state.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  /** Global/app errors */
  // public error$ = this.settings.error$;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    public ui: UiStateService,
  ) {}

  ngOnInit() {
    this.routeChange();
  }

  /**
   * Actions to perform on route change
   * Page titles are in app.routes.ts
   */
  public routeChange() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data),
      )
      .subscribe(event => {
        // // Set Path Route for
        // this.ui.setPathVariable(event.title)
        // Change document title
        this.title.setTitle(
          event['title'] + ' | ' + environment.properties.appName,
        );
      });
  }
}
