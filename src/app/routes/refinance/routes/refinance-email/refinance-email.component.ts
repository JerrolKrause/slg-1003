import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-refinance-email',
  templateUrl: './refinance-email.component.html',
  styleUrls: ['./refinance-email.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefinanceEmailComponent implements OnInit {
  public email = '';

  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
