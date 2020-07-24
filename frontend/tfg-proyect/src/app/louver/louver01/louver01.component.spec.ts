import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Louver01Component } from './louver01.component';

describe('Louver01Component', () => {
  let component: Louver01Component;
  let fixture: ComponentFixture<Louver01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Louver01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Louver01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
