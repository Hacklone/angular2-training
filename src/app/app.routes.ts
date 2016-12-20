import { Routes, RouterModule } from '@angular/router';
import { RobotListComponent } from './robot-list/robot-list.component';

import { ModuleWithProviders } from '@angular/core';
import { RobotProfileComponent } from './robot-profile/robot-profile.component';

const routeConfigs: Routes = [
  { path: 'browse', component: RobotListComponent },
  { path: 'robots/:id', component: RobotProfileComponent },
  { path: '**', redirectTo: 'browse' }
];

export const AppRoutes = RouterModule.forRoot(routeConfigs);
