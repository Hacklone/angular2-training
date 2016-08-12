import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RobotListService} from "../shared/services/robot-list.service";
import {Subscription} from "rxjs";
import {Robot} from "../shared/models/robot.interface";

@Component({
  selector: 'app-robot-profile',
  templateUrl: 'robot-profile.component.html',
  styleUrls: ['robot-profile.component.css']
})
export class RobotProfileComponent implements OnInit {
  robot: Robot;

  routeParamSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private robotListService: RobotListService) { }

  ngOnInit() {
    this.routeParamSubscription = this.route.params
      .subscribe(async (params) => {
        const id = +params['id'];

        this.robot = await this.robotListService.getRobotById(id);
      });
  }

  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
  }
}
