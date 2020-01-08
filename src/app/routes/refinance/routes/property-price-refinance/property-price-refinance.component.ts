import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-property-price-refinance',
  templateUrl: './property-price-refinance.component.html',
  styleUrls: ['./property-price-refinance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyPriceRefinanceComponent implements OnInit {
  estimatedValue?: string;
  intValue?: number
  constructor(public ui: UiStateService) {}

  ngOnInit() {}

  updateValue(value: number) {
    this.intValue = value
    if (value > 1) {
      let commaString = (Math.round(value / 1000) * 1000)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      if (value < 2000000) {
        this.estimatedValue = '$' + commaString;
      } else {
        this.estimatedValue = '$' + commaString + '+';
      }
    }
  }
}
