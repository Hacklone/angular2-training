import { Routes, RouterModule } from '@angular/router';
import { RobotListComponent } from './robot-list/robot-list.component';
import { RobotProfileComponent } from './robot-profile/robot-profile.component';

import { ModuleWithProviders } from '@angular/core';

const routeConfigs: Routes = [
  { path: 'browse', component: RobotListComponent },
  { path: 'robots/:id', component: RobotProfileComponent },
  { path: 'cart', loadChildren: 'app/+cart/cart.module#CartModule' },
  { path: '**', redirectTo: 'browse' }
];

export const AppRoutes = RouterModule.forRoot(routeConfigs);
