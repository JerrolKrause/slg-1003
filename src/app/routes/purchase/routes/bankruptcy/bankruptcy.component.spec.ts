import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankruptcyComponent } from './bankruptcy.component';

describe('BankruptcyComponent', () => {
  let component: BankruptcyComponent;
  let fixture: ComponentFixture<BankruptcyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankruptcyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankruptcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
