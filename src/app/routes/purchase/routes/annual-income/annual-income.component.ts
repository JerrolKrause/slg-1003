import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-annual-income',
  templateUrl: './annual-income.component.html',
  styleUrls: ['./annual-income.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnnualIncomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
