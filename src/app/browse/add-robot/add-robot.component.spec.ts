/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AddRobotComponent } from './add-robot.component';
import { RobotListService } from '../../shared/services/robot-list.service';
import { Router } from '@angular/router';

describe('AddRobotComponent', () => {
  let component: AddRobotComponent;
  let fixture: ComponentFixture<AddRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddRobotComponent],
      providers: [
        {
          provide: RobotListService,
          useValue: {
            addRobotWithName: jasmine.createSpy('robotListService.addRobotWithName()')
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('Router.navigate()')
          }
        }
      ],
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

  describe('onFormSubmit()', () => {
    it('should call RobotListService addRobotWithName', () => {
      const expectedName = 'alma';
      component.addRobotForm.controls.robotName.setValue(expectedName);

      component.onFormSubmit();

      const mock = TestBed.get(RobotListService);

      expect(mock.addRobotWithName).toHaveBeenCalledWith(expectedName);
    });
  });
});
