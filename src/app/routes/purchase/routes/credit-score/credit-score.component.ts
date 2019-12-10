import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-credit-score',
  templateUrl: './credit-score.component.html',
  styleUrls: ['./credit-score.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreditScoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
