import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-purchase-timeline',
  templateUrl: './purchase-timeline.component.html',
  styleUrls: ['./purchase-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseTimelineComponent implements OnInit {
  // valueSubscription!: Subscription
  timeLine: string = '';
  constructor(public ui: UiStateService) {}

  ngOnInit() {
    // this.valueSubscription = this.ui.loadValue$.subscribe(res => this.timeLine = res)
  }

  // ngOnDestroy() {
  //   if(this.valueSubscription) {
  //     this.valueSubscription.unsubscribe()
  //   }
  // }
}
