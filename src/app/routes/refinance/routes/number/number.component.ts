import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberComponent implements OnInit {
  public number = '';
  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
