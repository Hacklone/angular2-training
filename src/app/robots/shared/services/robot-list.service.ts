import {Injectable} from "@angular/core";
import {Robot} from "../models/robot.interface";
import * as Chance from 'chance';

@Injectable()
export class RobotListService {
  getRobots(): Robot[] {
    const chance = new Chance();

    const robots = [];

    for(let i = 0; i < 20; i++) {
      robots.push({
        name: chance.name(),
        imageUrl: `https://robohash.org/${i}?size=150x150&bgset=bg1`
      });
    }

    return robots;
  }
}
