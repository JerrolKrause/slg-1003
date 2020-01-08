import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowCashRefinanceComponent } from './borrow-cash-refinance.component';

describe('BorrowCashRefinanceComponent', () => {
  let component: BorrowCashRefinanceComponent;
  let fixture: ComponentFixture<BorrowCashRefinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowCashRefinanceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowCashRefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
