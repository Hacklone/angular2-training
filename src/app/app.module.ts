import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RobotCardComponent } from './robots/robot-card/robot-card.component';
import { RobotListComponent } from './robots/robot-list/robot-list.component';
import {RobotListService} from "./shared/services/robot-list.service";
import {MagnifyOnMouseEnterDirective} from "./shared/directives/magnify-on-mouse-enter.directive";
import {RobotCartService} from "./shared/services/robot-cart.service";
import { RobotCartComponent } from './cart/robot-cart/robot-cart.component';
import {BookDatabaseService} from "./robots/shared/services/book-database.service";
import {HttpModule} from "@angular/http";
import {OrderByStringLengthPipe} from "./shared/pipes/order-by-string-length.pipe";
import {AppRoutingModule} from "./app.route";
import { RobotProfileComponent } from './robot-profile/robot-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RobotCardComponent,
    RobotListComponent,
    MagnifyOnMouseEnterDirective,
    RobotCartComponent,
    OrderByStringLengthPipe,
    RobotProfileComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RobotListService, RobotCartService, BookDatabaseService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
