import { Component, OnInit } from '@angular/core';
import { Robot } from '../shared/models/robot.interface';
import { RobotsService } from '../shared/services/robots/robots.service';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.scss']
})
export class RobotListComponent implements OnInit {

  constructor(private _robotsService: RobotsService) { }

  public robots: Robot[] = [];

  public async ngOnInit() {
    this.robots = await this._robotsService.getRobotsAsync();
  }

  public addRobotToCart(robot: Robot) {
    alert(robot.name);
  }
}
