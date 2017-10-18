import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Robot } from '../shared/services/robots/robot.interface';
import { RobotsService } from '../shared/services/robots/robots.service';
import { CartService } from '../shared/services/cart/cart.service';
import { RobotDialogComponent } from './robot-dialog/robot-dialog.component';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { RobotCardComponent } from '../shared/components/robot-card/robot-card.component';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.scss']
})
export class RobotListComponent implements OnInit {
  private _robotAddedSubject = new Subject<Robot>();

  constructor(private _dialogService: MatDialog,
              private _robotsService: RobotsService,
              private _cartService: CartService) {
  }

  @ViewChild(RobotCardComponent)
  public robotCard: RobotCardComponent;

  public robots: Robot[] = [];

  public get robotAddedObservable(): Observable<Robot> {
    return this._robotAddedSubject.asObservable();
  }

  public get cart(): any {
    return this._cartService.robotsInCart;
  }

  public ngOnInit() {
    this._getRobots();
  }

  public addRobotToCart(robot: Robot) {
    this._cartService.addRobotToCart(robot);
  }

  public openRobotDialog(robot: Robot) {
    this._dialogService.open(RobotDialogComponent, {
      data: robot
    });
  }

  public addNewRobot() {
    const addedRobot = this._robotsService.addNewRobot();

    this._getRobots();

    this._robotAddedSubject.next(addedRobot);

    this.robotCard.consoleLogRobot();
  }

  private _getRobots() {
    this.robots = this._robotsService.getRobots();
  }
}
