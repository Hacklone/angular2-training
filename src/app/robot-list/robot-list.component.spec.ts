/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RobotListComponent } from './robot-list.component';

describe('RobotListComponent', () => {
  let component: RobotListComponent;
  let fixture: ComponentFixture<RobotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});