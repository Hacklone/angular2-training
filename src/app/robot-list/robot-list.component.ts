import { Component, OnInit } from '@angular/core';
import { Chance } from 'chance';
import { Robot } from '../shared/models/robot.interface';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.scss']
})
export class RobotListComponent implements OnInit {

  constructor() { }

  public robotList: Robot[] = [];

  ngOnInit() {
    for(let i = 0; i < 30; i++) {
      const name = new Chance().name();

      this.robotList.push({
        id: i,
        name,
        imageUrl: `https://robohash.org/${name}?size=50x50`
      });
    }
  }
}
