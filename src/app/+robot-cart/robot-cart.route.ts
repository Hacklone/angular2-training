import {Routes, RouterModule} from "@angular/router";
import {RobotCartComponent} from "./robot-cart.component";

const routes: Routes = [
  { path: '', component: RobotCartComponent }
];

export const RobotCartRoutingModule = RouterModule.forChild(routes);
