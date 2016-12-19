import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Robot } from '../../models/robot.interface';

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

  @Output()
  public addToCart: EventEmitter<Robot> = new EventEmitter<Robot>();

  ngOnInit() {

  }

  onCartButtonClick() {
    this.addToCart.emit(this.robot);
  }
}
