import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailComponent implements OnInit {
  public email = '';
  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
