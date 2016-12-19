import { Component, OnInit } from '@angular/core';
import { Robot } from '../shared/models/robot.interface';
import { RobotListService } from '../shared/services/robot-list.service';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.scss']
})
export class RobotListComponent implements OnInit {

  constructor(private _robotListService: RobotListService) {

  }

  public robotList: Robot[];

  ngOnInit() {
    this.robotList = this._robotListService.getRobots();
  }

  onAddRobotToCart(robot: Robot) {
    console.log(`Robot added: ${robot.name}`);
  }
}
