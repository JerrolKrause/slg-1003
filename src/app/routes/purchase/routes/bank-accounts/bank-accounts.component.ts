import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BankAccountsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
