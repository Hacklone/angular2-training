import {Component, OnInit, Input} from '@angular/core';
import {Robot} from "../shared/models/robot.interface";

@Component({
  selector: 'app-robot-card',
  templateUrl: 'robot-card.component.html',
  styleUrls: ['robot-card.component.css']
})
export class RobotCardComponent implements OnInit {
  @Input('robot')
  robot: Robot;

  constructor() { }

  ngOnInit() {
  }

}
