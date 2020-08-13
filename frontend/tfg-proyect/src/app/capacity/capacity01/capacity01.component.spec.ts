import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Capacity01Component } from './capacity01.component';

describe('Capacity01Component', () => {
  let component: Capacity01Component;
  let fixture: ComponentFixture<Capacity01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Capacity01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Capacity01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
