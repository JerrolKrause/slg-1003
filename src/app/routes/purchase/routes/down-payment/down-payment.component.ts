import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-down-payment',
  templateUrl: './down-payment.component.html',
  styleUrls: ['./down-payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownPaymentComponent implements OnInit {
  // valueSubscription!: Subscription
  public downPaymentValue = '';
  sliderValue!: number;
  constructor(public ui: UiStateService) {}

  ngOnInit() {
    // this.valueSubscription = this.ui.loadValue$.subscribe(res =>  {
    //   this.downPaymentValue = res
    //   this.sliderValue = parseInt(res) - 1
    // })
  }

  updateValue(value: number) {
    if (value) {
      if (value === 90) {
        this.downPaymentValue = '91 - 100%';
      } else {
        this.downPaymentValue = `${value + 1} - ${value + 10}%`;
      }
    } else {
      this.downPaymentValue = '0 - 10%';
    }
  }

  // ngOnDestroy() {
  //   if(this.valueSubscription) {
  //     this.valueSubscription.unsubscribe()
  //   }
  // }
}
