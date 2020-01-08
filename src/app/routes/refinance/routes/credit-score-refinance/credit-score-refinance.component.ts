import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-credit-score-refinance',
  templateUrl: './credit-score-refinance.component.html',
  styleUrls: ['./credit-score-refinance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreditScoreRefinanceComponent implements OnInit {
  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
