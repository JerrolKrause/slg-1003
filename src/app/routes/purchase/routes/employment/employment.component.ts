import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmploymentComponent implements OnInit {
  // employed: string = ''
  // valueSubscription!: Subscription
  constructor(public ui: UiStateService) {}

  ngOnInit() {
    // this.valueSubscription = this.ui.loadValue$.subscribe(res => this.employed = res)
  }

  // ngOnDestroy() {
  //   if(this.valueSubscription) {
  //     this.valueSubscription.unsubscribe()
  //   }
  // }
}
