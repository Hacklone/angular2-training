/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RobotListService } from './robot-list.service';

describe('RobotListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RobotListService]
    });
  });

  it('should ...', inject([RobotListService], (service: RobotListService) => {
    expect(service).toBeTruthy();
  }));
});
