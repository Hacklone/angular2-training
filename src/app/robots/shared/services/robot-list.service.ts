import {Injectable} from "@angular/core";
import {Robot} from "../models/robot.interface";

@Injectable()
export class RobotListService {
  getRobots(): Robot[] {
    const robots = [];

    for(let i = 0; i < 20; i++) {
      const robotName = Math.random().toString(16).substring(2);

      robots.push({
        name: robotName,
        imageUrl: `https://robohash.org/${i}?size=150x150&bgset=bg1`
      });
    }

    return robots;
  }
}
