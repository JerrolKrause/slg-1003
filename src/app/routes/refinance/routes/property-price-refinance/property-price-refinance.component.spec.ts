import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyPriceRefinanceComponent } from './property-price-refinance.component';

describe('PropertyPriceRefinanceComponent', () => {
  let component: PropertyPriceRefinanceComponent;
  let fixture: ComponentFixture<PropertyPriceRefinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyPriceRefinanceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyPriceRefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
