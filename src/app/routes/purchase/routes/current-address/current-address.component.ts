import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-current-address',
  templateUrl: './current-address.component.html',
  styleUrls: ['./current-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentAddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
