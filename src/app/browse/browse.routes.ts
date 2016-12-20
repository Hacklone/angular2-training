import { Route } from '@angular/router';
import { BrowseComponent } from './browse.component';
import { RobotListComponent } from './robot-list/robot-list.component';
import { AddRobotComponent } from './add-robot/add-robot.component';
import { RobotProfileComponent } from './robot-profile/robot-profile.component';

export const BrowseRoutes: Route[] = [
  {
    path: 'browse',
    component: BrowseComponent,
    children: [
      { path: 'add', component: AddRobotComponent },
      { path: ':id', component: RobotProfileComponent },
      { path: '', component: RobotListComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];
