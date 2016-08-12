import {Routes, RouterModule} from "@angular/router";
import {RobotProfileComponent} from "./robot-profile.component";

const routes: Routes = [
  { path: '', component: RobotProfileComponent }
];

export const RobotProfileRoutingModule = RouterModule.forChild(routes);
