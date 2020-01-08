import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyRefinanceComponent } from './property-refinance.component';

describe('PropertyRefinanceComponent', () => {
  let component: PropertyRefinanceComponent;
  let fixture: ComponentFixture<PropertyRefinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyRefinanceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyRefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
