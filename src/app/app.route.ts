import {Routes, RouterModule} from "@angular/router";

const appRoutes: Routes = [
  { path: '', loadChildren: 'app/+robot-list/robot-list.module#RobotListModule' },
  { path: 'cart', loadChildren: 'app/+robot-cart/robot-cart.module#RobotCartModule' },
  { path: 'robots/:id', loadChildren: 'app/+robot-profile/robot-profile.module#RobotProfileModule' },
  { path: '**', redirectTo: '', terminal: true }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
