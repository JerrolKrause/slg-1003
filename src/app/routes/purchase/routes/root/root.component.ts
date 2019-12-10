import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';

// Global state
import { UiStateService } from '$ui';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent implements OnInit, OnDestroy {
  constructor(
    public uiState: UiStateService, // Global UI state
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
