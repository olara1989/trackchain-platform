import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceStep2Component } from './trace-step2.component';

describe('TraceStep2Component', () => {
  let component: TraceStep2Component;
  let fixture: ComponentFixture<TraceStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
