import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-property-location',
  templateUrl: './property-location.component.html',
  styleUrls: ['./property-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyLocationComponent implements OnInit {
  public address = '';
  public city = '';
  public state = '';
  public county = '';
  public zip = '';
  // valueSubscription!: Subscription
  constructor(public ui: UiStateService) {}
  ngOnInit() {
    // this.valueSubscription = this.ui.loadValue$.subscribe(res => this.address = res)
  }

  // ngOnDestroy() {
  //   if(this.valueSubscription) {
  //     this.valueSubscription.unsubscribe()
  //   }
  // }
}
