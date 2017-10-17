import { Component, OnInit } from '@angular/core';
import { Robot } from '../shared/services/robots/robot.interface';
import { RobotsService } from '../shared/services/robots/robots.service';
import { CartService } from '../shared/services/cart/cart.service';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.scss']
})
export class RobotListComponent implements OnInit {

  constructor(private _robotsService: RobotsService,
              private _cartService: CartService) {
  }

  public robots: Robot[] = [];

  public get cart(): any {
    return this._cartService.robotsInCart;
  }

  public ngOnInit() {
    this.robots = this._robotsService.getRobots();
  }

  public addRobotToCart(robot: Robot) {
    this._cartService.addRobotToCart(robot);
  }
}
