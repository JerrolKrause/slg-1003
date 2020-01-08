import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationOfBirthComponent } from './location-of-birth.component';

describe('LocationOfBirthComponent', () => {
  let component: LocationOfBirthComponent;
  let fixture: ComponentFixture<LocationOfBirthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocationOfBirthComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationOfBirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
