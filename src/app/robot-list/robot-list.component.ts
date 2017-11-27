import { Component, OnInit } from '@angular/core';
import { Robot } from '../shared/models/robot.interface';
import * as Chance from 'chance';

const chance = new Chance();

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.scss']
})
export class RobotListComponent implements OnInit {

  constructor() { }

  public robots: Robot[] = [];

  ngOnInit() {
    for(let i = 0; i < 10; i++) {
      this.robots.push({
        id: i.toString(),
        name: chance.name(),
        imageUrl: `https://robohash.org/${i}?bgset=bg1`
      });
    }
  }
}
