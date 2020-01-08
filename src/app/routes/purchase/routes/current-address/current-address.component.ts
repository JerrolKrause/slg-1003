import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-current-address',
  templateUrl: './current-address.component.html',
  styleUrls: ['./current-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentAddressComponent implements OnInit {
  public address = '';
  public city = '';
  public state = '';
  public county = '';
  public zip = '';
  //  valueSubscription!: Subscription
  constructor(public ui: UiStateService) {}
  ngOnInit() {
    //  this.valueSubscription = this.ui.loadValue$.subscribe(res => this.address = res)
  }

  //  ngOnDestroy() {
  //    if(this.valueSubscription) {
  //      this.valueSubscription.unsubscribe()
  //    }
  //  }
}
