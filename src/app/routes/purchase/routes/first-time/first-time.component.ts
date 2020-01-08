import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-first-time',
  templateUrl: './first-time.component.html',
  styleUrls: ['./first-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstTimeComponent implements OnInit {
  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
