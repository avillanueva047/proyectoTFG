import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Temperature03Component } from './temperature03.component';

describe('Temperature03Component', () => {
  let component: Temperature03Component;
  let fixture: ComponentFixture<Temperature03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temperature03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temperature03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
