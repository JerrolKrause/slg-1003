import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-refinance-reason',
  templateUrl: './refinance-reason.component.html',
  styleUrls: ['./refinance-reason.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefinanceReasonComponent implements OnInit {
  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
