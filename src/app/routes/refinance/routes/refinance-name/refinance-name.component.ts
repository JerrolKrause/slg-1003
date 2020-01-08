import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-refinance-name',
  templateUrl: './refinance-name.component.html',
  styleUrls: ['./refinance-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefinanceNameComponent implements OnInit {
  public firstName = '';
  public lastName = '';
  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
