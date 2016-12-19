import { Injectable } from '@angular/core';
import { Chance } from 'chance';
import { Robot } from '../models/robot.interface';

@Injectable()
export class RobotListService {

  constructor() { }

  getRobots(): Robot[] {
    const robots = [];

    for(let i = 0; i < 30; i++) {
      const name = new Chance().name();

      robots.push({
        id: i,
        name,
        imageUrl: `https://robohash.org/${name}?size=50x50`
      });
    }

    return robots;
  }
}
