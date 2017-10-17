import { Component, Input, OnInit } from '@angular/core';
import { Robot } from '../../services/robots/robot.interface';

@Component({
  selector: 'app-robot-card',
  templateUrl: './robot-card.component.html',
  styleUrls: ['./robot-card.component.scss']
})
export class RobotCardComponent implements OnInit {

  constructor() { }

  @Input()
  public robot: Robot;

  public ngOnInit() {
  }
}
