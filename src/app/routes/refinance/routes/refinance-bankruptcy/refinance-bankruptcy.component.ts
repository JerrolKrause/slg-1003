import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-refinance-bankruptcy',
  templateUrl: './refinance-bankruptcy.component.html',
  styleUrls: ['./refinance-bankruptcy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefinanceBankruptcyComponent implements OnInit {
  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
