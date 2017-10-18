import { Injectable } from '@angular/core';
import { Robot } from './robot.interface';
import * as Chance from 'chance';

const chance = new Chance();

@Injectable()
export class RobotsService {
  private _robots = [];

  constructor() {
    for (let i = 0; i < 2; i++) {
      this._robots.push(this._generateRobot(i));
    }
  }

  public getRobots(): Robot[] {
    return this._robots;
  }

  public addNewRobot() {
    const robot = this._generateRobot(this._robots.length);

    this._robots.push(robot);

    return robot;
  }

  public updateRobot(robotModifications: Robot) {
    const robot = this.getRobotById(robotModifications.id);

    robot.name = robotModifications.name;
    robot.imageUrl = robotModifications.imageUrl;
  }

  public getRobotById(robotId: string) {
    return this._robots.find(robot => robot.id === robotId);
  }

  private _generateRobot(index: number): Robot {
    return {
      id: index.toString(),
      name: chance.name(),
      imageUrl: `https://robohash.org/${index}?size=200x200&set=set4&bgset=bg1`
    };
  }
}
