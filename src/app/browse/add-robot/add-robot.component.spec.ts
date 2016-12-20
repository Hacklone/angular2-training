/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AddRobotComponent } from './add-robot.component';

describe('AddRobotComponent', () => {
  let component: AddRobotComponent;
  let fixture: ComponentFixture<AddRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRobotComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
