import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-mortgage-price-refinance',
  templateUrl: './mortgage-price-refinance.component.html',
  styleUrls: ['./mortgage-price-refinance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MortgagePriceRefinanceComponent implements OnInit {
  estimatedValue?: number;
  constructor(public ui: UiStateService) {}

  ngOnInit() {}

  updateValue(value: number) {
    if (value > 1) {
      this.estimatedValue = Math.round(value / 1000) * 1000;
    }
  }
}
