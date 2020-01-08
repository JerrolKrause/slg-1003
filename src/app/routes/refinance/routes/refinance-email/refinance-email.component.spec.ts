import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinanceEmailComponent } from './refinance-email.component';

describe('RefinanceEmailComponent', () => {
  let component: RefinanceEmailComponent;
  let fixture: ComponentFixture<RefinanceEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefinanceEmailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinanceEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
