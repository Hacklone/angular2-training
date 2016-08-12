import {Injectable} from "@angular/core";
import {ReplaySubject, Observable} from "rxjs";
import {Robot} from "../models/robot.interface";

@Injectable()
export class RobotCartService {
  private robotsInCartSubject: ReplaySubject<Robot> = new ReplaySubject<Robot>();

  public addRobotToCart(robot: Robot) {
    this.robotsInCartSubject.next(robot);
  }

  public getRobotsInCart(): Observable<Robot> {
    return this.robotsInCartSubject.asObservable();
  }
}
