import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RobotListService } from '../shared/services/robot-list.service';
import { Robot } from '../shared/models/robot.interface';

@Component({
  selector: 'app-robot-profile',
  templateUrl: './robot-profile.component.html',
  styleUrls: ['./robot-profile.component.scss']
})
export class RobotProfileComponent implements OnInit, OnDestroy {
  private _routeParamsSubscription: Subscription;

  constructor(private _route: ActivatedRoute,
              private _robotListService: RobotListService) { }

  public robot: Robot;

  ngOnInit() {
    this._routeParamsSubscription = this._route.params.subscribe(params => {
      const robotId = +params['id'];

      this.robot = this._robotListService.getRobotById(robotId);
    });
  }

  ngOnDestroy() {
    this._routeParamsSubscription.unsubscribe();
  }
}
