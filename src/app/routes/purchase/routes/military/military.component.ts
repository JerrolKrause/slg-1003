import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-military',
  templateUrl: './military.component.html',
  styleUrls: ['./military.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MilitaryComponent implements OnInit {
  // valueSubscription!: Subscription
  // militaryBoolean!: boolean
  constructor(public ui: UiStateService) {}

  ngOnInit() {
    // this.valueSubscription = this.ui.loadValue$.subscribe(res => this.militaryBoolean = res)
  }
  // ngOnDestroy() {
  //   if(this.valueSubscription) {
  //     this.valueSubscription.unsubscribe()
  //   }
  // }
}
