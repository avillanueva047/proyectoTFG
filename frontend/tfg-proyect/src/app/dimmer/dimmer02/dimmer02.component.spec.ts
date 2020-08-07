import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dimmer02Component } from './dimmer02.component';

describe('Dimmer02Component', () => {
  let component: Dimmer02Component;
  let fixture: ComponentFixture<Dimmer02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dimmer02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dimmer02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
