import { Component, OnInit } from '@angular/core';
import { Robot } from '../shared/services/robots/robot.interface';
import * as Chance from 'chance';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.scss']
})
export class RobotListComponent implements OnInit {

  constructor() {
  }

  public robots: Robot[] = [];

  public ngOnInit() {
    const chance = new Chance();

    for (let i = 0; i < 20; i++) {
      this.robots.push({
        id: i.toString(),
        name: chance.name(),
        imageUrl: `https://robohash.org/${i}?size=200x200&set=set4&bgset=bg1`
      });
    }
  }

}
