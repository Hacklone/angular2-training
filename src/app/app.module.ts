import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RobotListComponent } from './robot-list/robot-list.component';
import { RobotCardComponent } from './shared/components/robot-card/robot-card.component';
import { RobotsService } from './shared/services/robots/robots.service';
import { ZoomDirective } from './shared/directives/zoom/zoom.directive';
import { UserContextService } from './shared/services/user-context/user-context.service';
import { BooksService } from './robot-list/shared/services/books/books.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksDialogComponent } from './robot-list/shared/components/books-dialog/books-dialog.component';
import { OrderRobotsPipe } from './shared/pipes/order-robots/order-robots.pipe';
import { RobotDetailsComponent } from './robot-details/robot-details.component';
import { AppRoutingModule } from './app-routing.module';
import { RobotCartComponent } from './robot-cart/robot-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RobotListComponent,
    RobotCardComponent,
    ZoomDirective,
    BooksDialogComponent,
    OrderRobotsPipe,
    RobotDetailsComponent,
    RobotCartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatDialogModule,

    AppRoutingModule
  ],
  providers: [
    RobotsService,
    UserContextService,
    BooksService
  ],
  entryComponents: [
    BooksDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
