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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RobotListComponent,
    RobotCardComponent,
    ZoomDirective,
    BooksDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatDialogModule
  ],
  providers: [
    RobotsService,
    UserContextService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
