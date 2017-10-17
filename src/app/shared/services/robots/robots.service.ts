import { Injectable } from '@angular/core';
import { Robot } from './robot.interface';
import * as Chance from 'chance';

@Injectable()
export class RobotsService {
  public getRobots(): Robot[] {
    const robots = [];

    const chance = new Chance();

    for (let i = 0; i < 20; i++) {
      robots.push({
        id: i.toString(),
        name: chance.name(),
        imageUrl: `https://robohash.org/${i}?size=200x200&set=set4&bgset=bg1`
      });
    }

    return robots;
  }
}
