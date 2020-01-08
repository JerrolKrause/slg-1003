import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinancePasswordComponent } from './refinance-password.component';

describe('RefinancePasswordComponent', () => {
  let component: RefinancePasswordComponent;
  let fixture: ComponentFixture<RefinancePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefinancePasswordComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinancePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
