import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinancePropertyComponent } from './refinance-property.component';

describe('RefinancePropertyComponent', () => {
  let component: RefinancePropertyComponent;
  let fixture: ComponentFixture<RefinancePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefinancePropertyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinancePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
