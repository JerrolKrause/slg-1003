import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-purchase-timeline',
  templateUrl: './purchase-timeline.component.html',
  styleUrls: ['./purchase-timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseTimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
