/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RobotProfileComponent } from './robot-profile.component';

describe('RobotProfileComponent', () => {
  let component: RobotProfileComponent;
  let fixture: ComponentFixture<RobotProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
