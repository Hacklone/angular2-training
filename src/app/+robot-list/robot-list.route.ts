import {Routes, RouterModule} from "@angular/router";
import {RobotListComponent} from "./robot-list.component";

const routes: Routes = [
  { path: '', component: RobotListComponent }
];

export const RobotListRoutingModule = RouterModule.forChild(routes);
