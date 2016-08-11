import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RobotCardComponent } from './robots/robot-card/robot-card.component';
import { RobotListComponent } from './robots/robot-list/robot-list.component';

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
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
