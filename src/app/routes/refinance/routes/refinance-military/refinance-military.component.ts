import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-refinance-military',
  templateUrl: './refinance-military.component.html',
  styleUrls: ['./refinance-military.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefinanceMilitaryComponent implements OnInit {
  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
