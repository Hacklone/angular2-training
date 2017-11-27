import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RobotListComponent } from './robot-list/robot-list.component';
import { RobotCardComponent } from './shared/components/robot-card/robot-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RobotListComponent,
    RobotCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
