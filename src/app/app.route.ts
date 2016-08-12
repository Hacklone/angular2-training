import {Routes, RouterModule} from "@angular/router";
import {RobotListComponent} from "./robots/robot-list/robot-list.component";
import {RobotCartComponent} from "./cart/robot-cart/robot-cart.component";

const appRoutes: Routes = [
  { path: '', component: RobotListComponent },
  { path: 'cart', component: RobotCartComponent },
  { path: '**', redirectTo: '', terminal: true }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
