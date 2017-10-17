import { Component, OnInit } from '@angular/core';
import { Robot } from '../shared/services/robots/robot.interface';
import { RobotsService } from '../shared/services/robots/robots.service';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.scss']
})
export class RobotListComponent implements OnInit {

  constructor(private _robotsService: RobotsService) {
  }

  public robots: Robot[] = [];

  public ngOnInit() {
    this.robots = this._robotsService.getRobots();
  }
}
