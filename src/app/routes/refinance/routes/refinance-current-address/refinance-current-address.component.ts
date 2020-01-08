import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-refinance-current-address',
  templateUrl: './refinance-current-address.component.html',
  styleUrls: ['./refinance-current-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefinanceCurrentAddressComponent implements OnInit {
  public address = '';
  public city = '';
  public state = '';
  public county = '';
  public zip = '';
  constructor(public ui: UiStateService) {}

  ngOnInit() {}
}
