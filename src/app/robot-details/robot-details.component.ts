import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Robot } from '../shared/models/robot.interface';
import { RobotsService } from '../shared/services/robots/robots.service';

@Component({
  selector: 'app-robot-details',
  templateUrl: './robot-details.component.html',
  styleUrls: ['./robot-details.component.scss']
})
export class RobotDetailsComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
              private _robotsService: RobotsService) { }

  public robot: Robot;

  ngOnInit() {
    this._activatedRoute.params.subscribe(async (params) => {
      this.robot = await this._robotsService.getRobotByIdAsync(params['id']);
    });
  }

}
