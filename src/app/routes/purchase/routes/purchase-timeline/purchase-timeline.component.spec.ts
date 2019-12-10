import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseTimelineComponent } from './purchase-timeline.component';

describe('PurchaseTimelineComponent', () => {
  let component: PurchaseTimelineComponent;
  let fixture: ComponentFixture<PurchaseTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
