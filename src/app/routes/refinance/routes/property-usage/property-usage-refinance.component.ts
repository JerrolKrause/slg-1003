import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-property-usage-refinance',
  templateUrl: './property-usage-refinance.component.html',
  styleUrls: ['./property-usage-refinance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyUsageRefinanceComponent implements OnInit {
  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
