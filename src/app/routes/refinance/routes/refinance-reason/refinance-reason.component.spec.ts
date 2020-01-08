import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinanceReasonComponent } from './refinance-reason.component';

describe('RefinanceReasonComponent', () => {
  let component: RefinanceReasonComponent;
  let fixture: ComponentFixture<RefinanceReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefinanceReasonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinanceReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
