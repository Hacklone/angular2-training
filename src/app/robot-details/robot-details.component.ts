import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Robot } from '../shared/services/robots/robot.interface';
import { RobotsService } from '../shared/services/robots/robots.service';

@Component({
  selector: 'app-robot-details',
  templateUrl: './robot-details.component.html',
  styleUrls: ['./robot-details.component.scss']
})
export class RobotDetailsComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
              private _robotsService: RobotsService) {
  }

  public robot: Robot;

  ngOnInit() {
    //TODO: unsubscribe
    this._activatedRoute.params.subscribe((params: Params) => {
      const robotId = params.id;

      this.robot =  this._robotsService.getRobotById(robotId);
    });
  }

}
