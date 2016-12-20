import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartBoxComponent } from './cart-box/cart-box.component';
import { CartRoutes } from './cart.routes';

@NgModule({
  imports: [
    CommonModule,

    CartRoutes
  ],
  declarations: [
    CartComponent,
    CartBoxComponent
  ]
})
export class CartModule {
}
