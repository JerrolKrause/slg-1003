import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-refinance-property',
  templateUrl: './refinance-property.component.html',
  styleUrls: ['./refinance-property.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefinancePropertyComponent implements OnInit {
  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
