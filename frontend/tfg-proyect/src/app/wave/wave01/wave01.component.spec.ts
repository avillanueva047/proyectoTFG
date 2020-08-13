import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wave01Component } from './wave01.component';

describe('Wave01Component', () => {
  let component: Wave01Component;
  let fixture: ComponentFixture<Wave01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wave01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wave01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
