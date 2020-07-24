import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Louver02Component } from './louver02.component';

describe('Louver02Component', () => {
  let component: Louver02Component;
  let fixture: ComponentFixture<Louver02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Louver02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Louver02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
