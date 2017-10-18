import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RobotsService } from './shared/services/robots/robots.service';
import { CartService } from './shared/services/cart/cart.service';
import { BooksService } from './shared/services/books/books.service';
import { RobotDialogComponent } from './robot-list/robot-dialog/robot-dialog.component';
import { MatCheckboxModule, MatDialogModule } from '@angular/material';
import { AppRouteModule } from './app-routing.module';
import { RobotCartComponent } from './robot-cart/robot-cart.component';
import { RobotDetailsComponent } from './robot-details/robot-details.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RobotCartComponent,
    RobotDetailsComponent,
  ],
  imports: [
    SharedModule,

    AppRouteModule
  ],
  providers: [
    RobotsService,
    CartService,
    BooksService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
