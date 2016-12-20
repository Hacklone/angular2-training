import { Injectable } from '@angular/core';
import { Robot } from '../models/robot.interface';
import { CartRobot } from '../models/cart-robot.model';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CartService {
  private _addedRobots: CartRobot[] = [];
  private _onAddedRobotsChanged: Subject<CartRobot[]> = new Subject<CartRobot[]>();

  constructor() {
  }

  public get onAddedRobotsChanged(): Observable<CartRobot[]> {
    return this._onAddedRobotsChanged;
  }

  addRobotToCart(robot: Robot): void {
    const addedRobot = this._addedRobots.find(r => r.robot.id === robot.id);

    if (addedRobot) {
      addedRobot.count++;
    } else {
      this._addedRobots.push({
        count: 1,
        robot: robot
      });
    }

    this._onAddedRobotsChanged.next(this._addedRobots);
  }

  getAddedRobots() {
    return this._addedRobots;
  }
}
