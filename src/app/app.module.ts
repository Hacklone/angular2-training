import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RobotListComponent } from './robot-list/robot-list.component';
import { RobotCardComponent } from './shared/components/robot-card/robot-card.component';
import { RobotsService } from './shared/services/robots/robots.service';
import { CartService } from './shared/services/cart/cart.service';
import { ZoomDirective } from './shared/directives/zoom.directive';
import { BooksService } from './shared/services/books/books.service';
import { RobotDialogComponent } from './robot-list/robot-dialog/robot-dialog.component';
import { MatCheckboxModule, MatDialogModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderByPropertyPipe } from './shared/pipes/order-by-property.pipe';
import { FormsModule } from '@angular/forms';
import { AppRouteModule } from './app-routing.module';
import { RobotCartComponent } from './robot-cart/robot-cart.component';
import { RobotDetailsComponent } from './robot-details/robot-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RobotListComponent,
    RobotCardComponent,
    ZoomDirective,
    RobotDialogComponent,
    OrderByPropertyPipe,
    RobotCartComponent,
    RobotDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    MatDialogModule,
    MatCheckboxModule,
    MatInputModule,

    AppRouteModule
  ],
  providers: [
    RobotsService,
    CartService,
    BooksService,
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    RobotDialogComponent
  ]
})
export class AppModule { }
