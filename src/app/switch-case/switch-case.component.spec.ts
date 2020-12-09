import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseComponent } from './switch-case.component';

describe('SwitchCaseComponent', () => {
  let component: SwitchCaseComponent;
  let fixture: ComponentFixture<SwitchCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
