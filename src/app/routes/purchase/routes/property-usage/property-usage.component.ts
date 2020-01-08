import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-property-usage',
  templateUrl: './property-usage.component.html',
  styleUrls: ['./property-usage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyUsageComponent implements OnInit {
  // valueSubscription!: Subscription
  usage: string = '';
  constructor(public ui: UiStateService) {}

  ngOnInit() {
    // this.valueSubscription = this.ui.loadValue$.subscribe(res => this.usage = res)
  }
  // ngOnDestroy() {
  //   if(this.valueSubscription) {
  //     this.valueSubscription.unsubscribe()
  //   }
  // }
}
