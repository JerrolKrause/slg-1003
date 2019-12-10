import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
