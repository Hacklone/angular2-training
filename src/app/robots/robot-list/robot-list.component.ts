import { Component, OnInit } from '@angular/core';
import {Robot} from "../shared/models/robot.interface";
import {RobotListService} from "../shared/services/robot-list.service";
import {RobotCartService} from "../shared/services/robot-cart.service";

@Component({
  selector: 'app-robot-list',
  templateUrl: 'robot-list.component.html',
  styleUrls: ['robot-list.component.css']
})
export class RobotListComponent implements OnInit {
  robots: Robot[];

  constructor(private robotListService: RobotListService,
  private robotCartService: RobotCartService) { }

  ngOnInit() {
    this.robots = this.robotListService.getRobots();
  }

  onAddRobotToCart(robot: Robot) {
    this.robotCartService.addRobotToCart(robot);
  }
}
