import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bankruptcy',
  templateUrl: './bankruptcy.component.html',
  styleUrls: ['./bankruptcy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BankruptcyComponent implements OnInit {
  bankrupt: string = '';
  // valueSubscription!: Subscription
  constructor(public ui: UiStateService) {}

  ngOnInit() {
    // this.valueSubscription = this.ui.loadValue$.subscribe(res => this.bankrupt = res)
  }

  // ngOnDestroy() {
  //   if(this.valueSubscription) {
  //     this.valueSubscription.unsubscribe()
  //   }
  // }
}
