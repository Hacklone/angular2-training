import { Routes, RouterModule } from '@angular/router';
import { CartBoxComponent } from './cart-box/cart-box.component';

import { ModuleWithProviders } from '@angular/core';

const routeConfigs: Routes = [
  { path: 'box', component: CartBoxComponent },
  { path: '**', redirectTo: 'box' }
];

export const CartRoutes = RouterModule.forChild(routeConfigs);
