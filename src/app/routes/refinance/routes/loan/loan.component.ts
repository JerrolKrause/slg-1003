import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanComponent implements OnInit {
  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
