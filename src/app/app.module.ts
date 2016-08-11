import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RobotCardComponent } from './robots/robot-card/robot-card.component';
import { RobotListComponent } from './robots/robot-list/robot-list.component';
import {RobotListService} from "./robots/shared/services/robot-list.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RobotCardComponent,
    RobotListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [RobotListService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
