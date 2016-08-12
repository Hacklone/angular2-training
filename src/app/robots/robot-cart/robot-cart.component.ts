import {Component, OnInit, OnDestroy} from '@angular/core';
import {Robot} from "../shared/models/robot.interface";
import {RobotCartService} from "../shared/services/robot-cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-robot-cart',
  templateUrl: 'robot-cart.component.html',
  styleUrls: ['robot-cart.component.css']
})
export class RobotCartComponent implements OnInit, OnDestroy {
  addedRobots: Robot[];

  private robotsCartSubscription: Subscription;

  constructor(private robotCartService: RobotCartService) { }

  ngOnInit() {
    this.addedRobots = [];

    this.robotsCartSubscription = this.robotCartService.getRobotsInCart()
      .subscribe((robot) => {
        this.addedRobots.push(robot);
      });
  }

  ngOnDestroy() {
    this.robotsCartSubscription.unsubscribe();
  }
}
