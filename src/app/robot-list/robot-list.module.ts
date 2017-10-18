import { NgModule } from '@angular/core';
import { RobotListComponent } from './robot-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatCheckboxModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RobotListComponent
  ],
  imports: [
    SharedModule,

    CommonModule,
    FormsModule,
    MatCheckboxModule
  ]
})
export class RobotListModule {
}
