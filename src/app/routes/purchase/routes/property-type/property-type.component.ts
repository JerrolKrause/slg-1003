import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-property-type',
  templateUrl: './property-type.component.html',
  styleUrls: ['./property-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyTypeComponent implements OnInit {

  constructor(public ui: UiStateService) { }

  ngOnInit() {
  }

}
