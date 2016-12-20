import { Injectable } from '@angular/core';
import { Chance } from 'chance';
import { Robot } from '../models/robot.interface';

@Injectable()
export class RobotListService {
  private _robots: Robot[] = [];

  constructor() {
    for(let i = 0; i < 30; i++) {
      const name = new Chance().name();

      this._robots.push({
        id: i,
        name,
        imageUrl: `https://robohash.org/${name}?size=50x50`
      });
    }
  }

  getRobots(): Robot[] {
    return this._robots;
  }

  getRobotById(robotId: number) {
    return this._robots.find(robot => robot.id === robotId);
  }

  addRobotWithName(name: string) {
    this._robots.push({
      id: this._robots.length,
      name,
      imageUrl: `https://robohash.org/${name}?size=50x50`
    });
  }
}
