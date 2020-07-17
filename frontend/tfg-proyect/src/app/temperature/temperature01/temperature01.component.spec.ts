import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Temperature01Component } from './temperature01.component';

describe('Temperature01Component', () => {
  let component: Temperature01Component;
  let fixture: ComponentFixture<Temperature01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temperature01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temperature01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
