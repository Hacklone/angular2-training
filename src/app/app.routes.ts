import { Routes, RouterModule } from '@angular/router';
import { BrowseRoutes } from './browse/browse.routes';

import { ModuleWithProviders } from '@angular/core';

const routeConfigs: Routes = [
  ...BrowseRoutes,
  { path: 'cart', loadChildren: 'app/+cart/cart.module#CartModule' },
  { path: '**', redirectTo: 'browse' }
];

export const AppRoutes = RouterModule.forRoot(routeConfigs);
