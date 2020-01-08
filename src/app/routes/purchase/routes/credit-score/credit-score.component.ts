import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-credit-score',
  templateUrl: './credit-score.component.html',
  styleUrls: ['./credit-score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreditScoreComponent implements OnInit {
  credit: string = '';
  // valueSubscription!: Subscription
  constructor(public ui: UiStateService) {}

  ngOnInit() {
    // this.valueSubscription = this.ui.loadValue$.subscribe(res => this.credit = res)
  }

  // ngOnDestroy() {
  //   if(this.valueSubscription) {
  //     this.valueSubscription.unsubscribe()
  //   }
  // }
}
