import { Component, Input, OnInit } from '@angular/core';
import { Robot } from '../../services/robots/robot.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-robot-card',
  templateUrl: './robot-card.component.html',
  styleUrls: ['./robot-card.component.scss']
})
export class RobotCardComponent implements OnInit {

  constructor() {
  }

  @Input()
  public robot: Robot;

  @Input()
  public onRobotAdded: Observable<Robot>;

  public ngOnInit() {
    if (this.onRobotAdded) {
      //TODO: unsubscribe
      this.onRobotAdded.subscribe(() => {
        this.robot.name += ' :)';
      });
    }
  }

  public consoleLogRobot() {
    console.log(this.robot);
  }
}
