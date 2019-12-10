import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-military',
  templateUrl: './military.component.html',
  styleUrls: ['./military.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MilitaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
