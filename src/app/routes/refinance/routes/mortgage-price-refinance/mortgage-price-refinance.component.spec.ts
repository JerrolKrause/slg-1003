import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgagePriceRefinanceComponent } from './mortgage-price-refinance.component';

describe('MortgagePriceRefinanceComponent', () => {
  let component: MortgagePriceRefinanceComponent;
  let fixture: ComponentFixture<MortgagePriceRefinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MortgagePriceRefinanceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgagePriceRefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
