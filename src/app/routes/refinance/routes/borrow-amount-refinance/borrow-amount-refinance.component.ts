import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-borrow-amount-refinance',
  templateUrl: './borrow-amount-refinance.component.html',
  styleUrls: ['./borrow-amount-refinance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BorrowAmountRefinanceComponent implements OnInit {
  estimatedValue?: string;
  borrowAmount?: number;
  constructor(public ui: UiStateService) {}

  ngOnInit() {}

  updateValue(value: number) {
    this.borrowAmount = value;
    let commaString = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    this.estimatedValue = `$${commaString}`;
  }
}
