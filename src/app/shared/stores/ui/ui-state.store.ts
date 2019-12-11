import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export function createInitialState(): UIState {
  return {
    tabsActive: {},
    toggles: {},
    formData: {},
    path: [{ path: '/', formProps: null }],
    pageCounter: 1,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'uiState', resettable: true })
export class UiStateStore extends Store<UIState> {
  constructor() {
    super(createInitialState());
  }
}
