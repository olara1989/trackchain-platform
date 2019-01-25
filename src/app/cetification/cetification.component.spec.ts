import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CetificationComponent } from './cetification.component';

describe('CetificationComponent', () => {
  let component: CetificationComponent;
  let fixture: ComponentFixture<CetificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CetificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CetificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
