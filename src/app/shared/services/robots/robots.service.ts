import { Injectable } from '@angular/core';
import { Robot } from '../../models/robot.interface';
import * as Chance from 'chance';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

const chance = new Chance();

@Injectable()
export class RobotsService {
  private _robotWithHighestPrice = new ReplaySubject<Robot>(1);
  private _robots: Robot[] = [];

  constructor() {
    for(let i = 0; i < 10; i++) {
      this._robots.push({
        id: i.toString(),
        name: chance.name(),
        imageUrl: `https://robohash.org/${i}?bgset=bg1`
      });
    }

    setInterval(() => {
      this._robotWithHighestPrice.next(this._robots[Math.round(Math.random() * this._robots.length)]);
    }, 5000);
  }

  public get robotWithHighestPrice(): Observable<Robot> {
    return this._robotWithHighestPrice.asObservable();
  }

  public async getRobotsAsync(): Promise<Robot[]> {
    return this._robots;
  }
}
