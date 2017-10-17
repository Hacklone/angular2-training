import { Injectable } from '@angular/core';
import { Robot } from '../robots/robot.interface';
import { RobotInCartMetadata } from './robot-in-cart-metadata.interface';

@Injectable()
export class CartService {
  public robotsInCart: {
    [id: string]: RobotInCartMetadata
  } = {};

  public addRobotToCart(robot: Robot) {
    const cartData = this._getRobotMetadata(robot);

    cartData.count++;
  }

  public removeRobotFromCart(robot: Robot) {
    const cartData = this._getRobotMetadata(robot);

    cartData.count = Math.max(0, cartData.count - 1);
  }

  private _getRobotMetadata(robot: Robot) {
    let cartData = this.robotsInCart[robot.id];

    if (!cartData) {
      cartData = this.robotsInCart[robot.id] = {
        count: 0,
        robot: robot
      };
    }

    return cartData;
  }
}
