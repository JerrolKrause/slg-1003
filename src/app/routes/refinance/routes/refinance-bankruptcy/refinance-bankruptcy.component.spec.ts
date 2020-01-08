import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinanceBankruptcyComponent } from './refinance-bankruptcy.component';

describe('RefinanceBankruptcyComponent', () => {
  let component: RefinanceBankruptcyComponent;
  let fixture: ComponentFixture<RefinanceBankruptcyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefinanceBankruptcyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinanceBankruptcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
