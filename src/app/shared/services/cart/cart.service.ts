import { Injectable } from '@angular/core';
import { Robot } from '../robots/robot.interface';
import { RobotInCartMetadata } from './robot-in-cart-metadata.interface';

@Injectable()
export class CartService {
  private _robotsInCart: {
    [id: string]: RobotInCartMetadata
  } = {};

  public addRobotToCart(robot: Robot) {
    const cartData = this._getRobotMetadata(robot);

    cartData.count++;
  }

  public removeRobotFromCart(robot: Robot) {
    const cartData = this._getRobotMetadata(robot);

    cartData.count--;
  }

  private _getRobotMetadata(robot: Robot) {
    let cartData = this._robotsInCart[robot.id];

    if (!cartData) {
      cartData = this._robotsInCart[robot.id] = {
        count: 0,
        robot: robot
      };
    }

    return cartData;
  }
}
