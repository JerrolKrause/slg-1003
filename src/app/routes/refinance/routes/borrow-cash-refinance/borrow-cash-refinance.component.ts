import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-borrow-cash-refinance',
  templateUrl: './borrow-cash-refinance.component.html',
  styleUrls: ['./borrow-cash-refinance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BorrowCashRefinanceComponent implements OnInit {
  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
