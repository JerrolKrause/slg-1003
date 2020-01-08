import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinanceNameComponent } from './refinance-name.component';

describe('RefinanceNameComponent', () => {
  let component: RefinanceNameComponent;
  let fixture: ComponentFixture<RefinanceNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefinanceNameComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinanceNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
