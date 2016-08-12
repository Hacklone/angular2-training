import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RobotCardComponent } from './robots/robot-card/robot-card.component';
import { RobotListComponent } from './robots/robot-list/robot-list.component';
import {RobotListService} from "./robots/shared/services/robot-list.service";
import {MagnifyOnMouseEnterDirective} from "./shared/directives/magnify-on-mouse-enter.directive";
import {RobotCartService} from "./robots/shared/services/robot-cart.service";
import { RobotCartComponent } from './robots/robot-cart/robot-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RobotCardComponent,
    RobotListComponent,
    MagnifyOnMouseEnterDirective,
    RobotCartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [RobotListService, RobotCartService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
