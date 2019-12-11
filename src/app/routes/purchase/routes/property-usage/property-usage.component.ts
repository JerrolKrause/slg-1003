import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-property-usage',
  templateUrl: './property-usage.component.html',
  styleUrls: ['./property-usage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyUsageComponent implements OnInit {

  constructor(public ui: UiStateService) { }

  ngOnInit() {
  }

}
