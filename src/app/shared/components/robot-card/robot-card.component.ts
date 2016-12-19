import { Component, OnInit } from '@angular/core';
import { Chance } from 'chance';

@Component({
  selector: 'app-robot-card',
  templateUrl: './robot-card.component.html',
  styleUrls: ['./robot-card.component.scss']
})
export class RobotCardComponent implements OnInit {
  constructor() {
  }

  public robot;

  ngOnInit() {
    const name = new Chance().name();

    this.robot = {
      name,
      imageUrl: `https://robohash.org/${name}`
    };
  }
}
