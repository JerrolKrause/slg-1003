import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-property-refinance',
  templateUrl: './property-refinance.component.html',
  styleUrls: ['./property-refinance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyRefinanceComponent implements OnInit {
  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
