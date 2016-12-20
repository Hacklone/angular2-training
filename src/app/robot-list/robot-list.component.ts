import { Component, OnInit } from '@angular/core';
import { Robot } from '../shared/models/robot.interface';
import { RobotListService } from '../shared/services/robot-list.service';
import { Router } from '@angular/router';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.scss']
})
export class RobotListComponent implements OnInit {

  constructor(private _robotListService: RobotListService,
              private _cartService: CartService,
              private _router: Router) {

  }

  public robotList: Robot[];

  ngOnInit() {
    this.robotList = this._robotListService.getRobots();
  }

  onAddRobotToCart(robot: Robot) {
    this._cartService.addRobotToCart(robot);
  }

  onRobotCardClick(robot: Robot) {
    this._router.navigate(['robots', robot.id]);
  }
}
