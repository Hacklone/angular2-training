import {Injectable} from "@angular/core";
import * as Chance from 'chance';
import {Robot} from "../models/robot.interface";

@Injectable()
export class RobotListService {
  robots: Robot[] = [];

  constructor() {
    const chance = new Chance();

    for(let i = 0; i < 20; i++) {
      this.robots.push({
        id: i,
        name: chance.name(),
        imageUrl: `https://robohash.org/${i}?size=150x150&bgset=bg1`
      });
    }
  }

  getRobots(): Promise<Robot[]> {
    return Promise.resolve(this.robots);
  }

  getRobotById(id: number): Promise<Robot> {
    return Promise.resolve(this.robots.find(robot => robot.id === id));
  }

  async modifyRobot(id: number, value: any): Promise<Robot> {
    const robot = await this.getRobotById(id);

    robot.name = value.name;
    robot.imageUrl = value.imageUrl;

    return robot;
  }
}
