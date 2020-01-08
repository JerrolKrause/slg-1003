import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditScoreRefinanceComponent } from './credit-score-refinance.component';

describe('CreditScoreRefinanceComponent', () => {
  let component: CreditScoreRefinanceComponent;
  let fixture: ComponentFixture<CreditScoreRefinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreditScoreRefinanceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditScoreRefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
