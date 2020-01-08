import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyUsageRefinanceComponent } from './property-usage-refinance.component';

describe('PropertyUsageComponent', () => {
  let component: PropertyUsageRefinanceComponent;
  let fixture: ComponentFixture<PropertyUsageRefinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyUsageRefinanceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyUsageRefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
