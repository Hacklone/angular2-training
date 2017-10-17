import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotDialogComponent } from './robot-dialog.component';

describe('RobotDialogComponent', () => {
  let component: RobotDialogComponent;
  let fixture: ComponentFixture<RobotDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
