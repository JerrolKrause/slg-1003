import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-first-time',
  templateUrl: './first-time.component.html',
  styleUrls: ['./first-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
