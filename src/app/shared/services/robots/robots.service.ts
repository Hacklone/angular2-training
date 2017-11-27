import { Injectable } from '@angular/core';
import { Robot } from '../../models/robot.interface';
import * as Chance from 'chance';

const chance = new Chance();

@Injectable()
export class RobotsService {
  private _robots: Robot[] = [];

  constructor() {
    for(let i = 0; i < 10; i++) {
      this._robots.push({
        id: i.toString(),
        name: chance.name(),
        imageUrl: `https://robohash.org/${i}?bgset=bg1`
      });
    }
  }

  public async getRobotsAsync(): Promise<Robot[]> {
    return this._robots;
  }
}
