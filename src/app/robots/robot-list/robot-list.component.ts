import { Component, OnInit } from '@angular/core';
import {Robot} from "../shared/models/robot.interface";
import {RobotListService} from "../shared/services/robot-list.service";

@Component({
  selector: 'app-robot-list',
  templateUrl: 'robot-list.component.html',
  styleUrls: ['robot-list.component.css']
})
export class RobotListComponent implements OnInit {
  robots: Robot[];

  constructor(private robotListService: RobotListService) { }

  ngOnInit() {
    this.robots = this.robotListService.getRobots();
  }

}
