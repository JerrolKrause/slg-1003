import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-purchase-price',
  templateUrl: './purchase-price.component.html',
  styleUrls: ['./purchase-price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchasePriceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
