import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowAmountRefinanceComponent } from './borrow-amount-refinance.component';

describe('BorrowAmountRefinanceComponent', () => {
  let component: BorrowAmountRefinanceComponent;
  let fixture: ComponentFixture<BorrowAmountRefinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowAmountRefinanceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowAmountRefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
