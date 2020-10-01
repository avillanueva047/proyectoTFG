import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alarm01Component } from './alarm01.component';

describe('Alarm01Component', () => {
  let component: Alarm01Component;
  let fixture: ComponentFixture<Alarm01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alarm01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alarm01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
