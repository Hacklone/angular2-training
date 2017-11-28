import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Robot } from '../shared/models/robot.interface';
import { RobotsService } from '../shared/services/robots/robots.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-robot-details',
  templateUrl: './robot-details.component.html',
  styleUrls: ['./robot-details.component.scss']
})
export class RobotDetailsComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
              private _formBuilder: FormBuilder,
              private _robotsService: RobotsService) { }

  public robot: Robot;

  public robotEditForm;

  public showSaveErrorMessage: boolean;

  ngOnInit() {
    this._activatedRoute.params.subscribe(async (params) => {
      this.robot = await this._robotsService.getRobotByIdAsync(params['id']);

      this.robotEditForm = this._formBuilder.group({
        robotName: [this.robot.name, Validators.required]
      });
    });
  }

  public saveRobot() {
    if (!this.robotEditForm.valid) {
      this.showSaveErrorMessage = true;

      return;
    }

    this.showSaveErrorMessage = false;

    this.robot.name = this.robotEditForm.controls.robotName.value;
  }
}
