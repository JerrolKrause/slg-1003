import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NameComponent implements OnInit {
  public firstName = '';
  public lastName = '';
  // valueSubscription!: Subscription
  constructor(public ui: UiStateService) {}
  ngOnInit() {
    // this.valueSubscription = this.ui.loadValue$.subscribe(res => {
    //   this.firstName = res.first
    //   this.lastName = res.last
    // })
  }

  // ngOnDestroy() {
  //   if (this.valueSubscription) {
  //     this.valueSubscription.unsubscribe()
  //   }
  // }
}
