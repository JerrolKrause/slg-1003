import {
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements OnChanges {
  @Input() min: number[] = [];
  @Input() max: number[] = [];
  @Input() unit?: string;
  @Input() incrementer?: number;
  @Input() estimatedValue?: string
  minString = '';
  maxString = '';
  @Output() valueChange = new EventEmitter();
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const { min, max } = changes;
    // Checker to see if for purchase or refinance route
    if (min.currentValue && min.currentValue.length > 1) {
      this.minString = `${min.currentValue[0]} - ${min.currentValue[1]}%`;
    }
    if (max.currentValue && max.currentValue.length > 1) {
      this.maxString = `${max.currentValue[0]} - ${max.currentValue[1]}%`;
    } else {
      this.minString = `$${min.currentValue[0]}`;

      if (max.currentValue[0] === 85000) {
        this.maxString = '$85k';
      } else {
        this.maxString = '$2M+';
      }
    }
  }

  handleChange(event: any) {
    // Increment incrementor based on estimated value
    if (event.value > 100000 && event.value < 200000) {
      this.incrementer = 20000;
    }
    if (event.value > 200000) {
      this.incrementer = 50000;
    }

    this.valueChange.emit(event.value);
  }
}
