import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RobotListComponent } from './robot-list/robot-list.component';
import { RobotCardComponent } from './shared/components/robot-card/robot-card.component';
import { RobotsService } from './shared/services/robots/robots.service';
import { ZoomDirective } from './shared/directives/zoom/zoom.directive';
import { UserContextService } from './shared/services/user-context/user-context.service';
import { BooksService } from './robot-list/shared/services/books/books.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RobotListComponent,
    RobotCardComponent,
    ZoomDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    RobotsService,
    UserContextService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
