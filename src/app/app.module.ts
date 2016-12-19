import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RobotCardComponent } from './shared/components/robot-card/robot-card.component';
import { RobotListComponent } from './robot-list/robot-list.component';
import { RobotListService } from './shared/services/robot-list.service';

@NgModule({
  declarations: [
    AppComponent,
    RobotCardComponent,
    RobotListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RobotListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
