import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Temperature02Component } from './temperature02.component';

describe('Temperature02Component', () => {
  let component: Temperature02Component;
  let fixture: ComponentFixture<Temperature02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temperature02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Temperature02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
