import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light01Component } from './light01.component';

describe('Light01Component', () => {
  let component: Light01Component;
  let fixture: ComponentFixture<Light01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
