import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Light02Component } from './light02.component';

describe('Light02Component', () => {
  let component: Light02Component;
  let fixture: ComponentFixture<Light02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Light02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Light02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
