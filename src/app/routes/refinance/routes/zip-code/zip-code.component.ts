import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-zip-code',
  templateUrl: './zip-code.component.html',
  styleUrls: ['./zip-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZipCodeComponent implements OnInit {
  public zipCode = '';
  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
