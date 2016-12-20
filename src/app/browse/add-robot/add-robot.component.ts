import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RobotListService } from '../../shared/services/robot-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-robot',
  templateUrl: './add-robot.component.html',
  styleUrls: ['./add-robot.component.scss']
})
export class AddRobotComponent implements OnInit {

  constructor(private _robotListService: RobotListService,
              private _router: Router) {
  }

  public addRobotForm;

  ngOnInit() {
    this.addRobotForm = new FormGroup({
      robotName: new FormControl('', Validators.required)
    });
  }

  onFormSubmit() {
    if(this.addRobotForm.invalid) {
      return;
    }

    this._robotListService.addRobotWithName(this.addRobotForm.controls.robotName.value);

    this._router.navigate(['']);
  }
}
