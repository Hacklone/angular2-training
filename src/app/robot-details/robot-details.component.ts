import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Robot } from '../shared/services/robots/robot.interface';
import { RobotsService } from '../shared/services/robots/robots.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-robot-details',
  templateUrl: './robot-details.component.html',
  styleUrls: ['./robot-details.component.scss']
})
export class RobotDetailsComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
              private _formBuilder: FormBuilder,
              private _robotsService: RobotsService) {
  }

  public editingRobot: Robot;

  public editingRobotForm: FormGroup;

  ngOnInit() {
    //TODO: unsubscribe
    this._activatedRoute.params.subscribe((params: Params) => {
      const robotId = params.id;

      this.editingRobot = this._robotsService.getRobotById(robotId);

      this.editingRobotForm = this._formBuilder.group({
        name: [this.editingRobot.name, Validators.required]
      });
    });
  }

  public saveRobot() {
    if (!this.editingRobotForm.valid) {
      return;
    }

    this._robotsService.updateRobot({
      id: this.editingRobot.id,
      name: this.editingRobotForm.controls.name.value,
      imageUrl: this.editingRobot.imageUrl
    });
  }
}
