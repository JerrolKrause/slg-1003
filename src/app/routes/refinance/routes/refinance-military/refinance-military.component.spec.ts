import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinanceMilitaryComponent } from './refinance-military.component';

describe('RefinanceMilitaryComponent', () => {
  let component: RefinanceMilitaryComponent;
  let fixture: ComponentFixture<RefinanceMilitaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefinanceMilitaryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinanceMilitaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
