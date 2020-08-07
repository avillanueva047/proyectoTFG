import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dimmer01Component } from './dimmer01.component';

describe('Dimmer01Component', () => {
  let component: Dimmer01Component;
  let fixture: ComponentFixture<Dimmer01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dimmer01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dimmer01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
