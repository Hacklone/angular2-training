
import { Route, RouterModule } from '@angular/router';
import { RobotListComponent } from './robot-list/robot-list.component';
import { RobotDetailsComponent } from './robot-details/robot-details.component';
import { RouteLocations } from './shared/services/routing/route-locations.enum';
import { RobotCartComponent } from './robot-cart/robot-cart.component';

const routes: Route[] = [
  { path: RouteLocations.RobotList, component: RobotListComponent },
  { path: RouteLocations.RobotDetails, component: RobotDetailsComponent },
  { path: RouteLocations.RobotCart, component: RobotCartComponent },
  { path: '**', redirectTo: RouteLocations.RobotList }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
