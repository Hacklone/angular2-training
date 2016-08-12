import {Routes, RouterModule} from "@angular/router";
import {RobotListComponent} from "./robots/robot-list/robot-list.component";
import {RobotCartComponent} from "./cart/robot-cart/robot-cart.component";
import {RobotProfileComponent} from "./robot-profile/robot-profile.component";

const appRoutes: Routes = [
  { path: '', component: RobotListComponent },
  { path: 'cart', component: RobotCartComponent },
  { path: 'robots/:id', component: RobotProfileComponent },
  { path: '**', redirectTo: '', terminal: true }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
