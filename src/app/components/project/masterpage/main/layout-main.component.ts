import { Component } from '@angular/core';
import { slideInAnimation } from '../../../../angular-animations';

@Component({
  selector: 'app-layout-main',
  templateUrl: './layout-main.component.html',
  animations: [slideInAnimation],
})
export class LayoutMainComponent {
  constructor() {}
}
