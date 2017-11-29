import { Injectable } from '@angular/core';
import { Robot } from '../../models/robot.interface';
import * as Chance from 'chance';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { HttpClient } from '@angular/common/http';

const chance = new Chance();

@Injectable()
export class RobotsService {
  private _robotWithHighestPrice = new ReplaySubject<Robot>(1);
  private _robots: Robot[] = [];

  constructor(private _http: HttpClient) {
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

  public async getNiceRobotsFromHttpAsync(id: string) {
    return await this._http.get(`/api/robots/${id}`).toPromise();
  }

  public get robotWithHighestPrice(): Observable<Robot> {
    return this._robotWithHighestPrice.asObservable();
  }

  public async getRobotsAsync(): Promise<Robot[]> {
    return this._robots;
  }

  public async getRobotByIdAsync(id: string): Promise<Robot> {
    return this._robots.find(robot => robot.id === id);
  }
}
