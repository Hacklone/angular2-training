import { Component, OnInit } from '@angular/core';
import {Robot} from "../shared/models/robot.interface";

@Component({
  selector: 'app-robot-card',
  templateUrl: 'robot-card.component.html',
  styleUrls: ['robot-card.component.css']
})
export class RobotCardComponent implements OnInit {
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
