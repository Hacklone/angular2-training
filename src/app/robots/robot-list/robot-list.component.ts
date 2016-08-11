import { Component, OnInit } from '@angular/core';
import {Robot} from "../shared/models/robot.interface";

@Component({
  selector: 'app-robot-list',
  templateUrl: 'robot-list.component.html',
  styleUrls: ['robot-list.component.css']
})
export class RobotListComponent implements OnInit {
  robot: Robot;

  constructor() { }

  ngOnInit() {
    const robotName = Math.random().toString(16).substring(2);

    this.robot = {
      name: robotName,
      imageUrl: `https://robohash.org/${robotName}?size=150x150&bgset=bg1`
    };
  }

}
