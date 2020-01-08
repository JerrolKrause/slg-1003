import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinanceCurrentAddressComponent } from './refinance-current-address.component';

describe('RefinanceCurrentAddressComponent', () => {
  let component: RefinanceCurrentAddressComponent;
  let fixture: ComponentFixture<RefinanceCurrentAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefinanceCurrentAddressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinanceCurrentAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
