import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RobotListService} from "../shared/services/robot-list.service";
import {Subscription} from "rxjs";
import {Robot} from "../shared/models/robot.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-robot-profile',
  templateUrl: 'robot-profile.component.html',
  styleUrls: ['robot-profile.component.css']
})
export class RobotProfileComponent implements OnInit {
  robot: Robot;

  routeParamSubscription: Subscription;
  private robotEditForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private robotListService: RobotListService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.routeParamSubscription = this.route.params
      .subscribe(async (params) => {
        const id = +params['id'];

        this.robot = await this.robotListService.getRobotById(id);
      });

    this.robotEditForm = this.formBuilder.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required, Validators.pattern('[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)')]
    });
  }

  ngOnDestroy() {
    this.routeParamSubscription.unsubscribe();
  }

  async onEditRobotFormSubmit(form) {debugger;
    this.robot = await this.robotListService.modifyRobot(this.robot.id, form.value);
  }
}
