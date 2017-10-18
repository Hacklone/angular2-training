import { Route, RouterModule } from '@angular/router';
import { RobotListComponent } from './robot-list/robot-list.component';
import { RobotCartComponent } from "./robot-cart/robot-cart.component";
import { RouteLocations } from './shared/routing/route-locations.enum';
import { RobotDetailsComponent } from './robot-details/robot-details.component';

export const routes: Route[] = [
  {
    path: RouteLocations.RobotList,
    component: RobotListComponent
  },
  {
    path: RouteLocations.RobotCart,
    component: RobotCartComponent
  },
  {
    path: RouteLocations.RobotDetails,
    component: RobotDetailsComponent
  },
  {
    path: '**',
    redirectTo: RouteLocations.RobotList
  }
];

export const AppRouteModule = RouterModule.forRoot(routes);
