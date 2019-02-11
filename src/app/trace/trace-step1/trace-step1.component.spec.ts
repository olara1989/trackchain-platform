import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceStep1Component } from './trace-step1.component';

describe('TraceStep1Component', () => {
  let component: TraceStep1Component;
  let fixture: ComponentFixture<TraceStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
