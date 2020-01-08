import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-property-type',
  templateUrl: './property-type.component.html',
  styleUrls: ['./property-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyTypeComponent implements OnInit {
  // valueSubscription!: Subscription
  type: string = '';
  constructor(public ui: UiStateService) {}

  ngOnInit() {
    // this.valueSubscription = this.ui.loadValue$.subscribe(res => this.type = res)
  }

  // ngOnDestroy() {
  //   if(this.valueSubscription) {
  //     this.valueSubscription.unsubscribe()
  //   }
  // }
}
