import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightRgb01Component } from './light-rgb01.component';

describe('LightRgb01Component', () => {
  let component: LightRgb01Component;
  let fixture: ComponentFixture<LightRgb01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightRgb01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightRgb01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
