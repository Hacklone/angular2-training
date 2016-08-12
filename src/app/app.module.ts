import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RobotListService} from "./shared/services/robot-list.service";
import {MagnifyOnMouseEnterDirective} from "./shared/directives/magnify-on-mouse-enter.directive";
import {HttpModule} from "@angular/http";
import {OrderByStringLengthPipe} from "./shared/pipes/order-by-string-length.pipe";
import {AppRoutingModule} from "./app.route";
import {BookDatabaseService} from "./shared/services/book-database.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MagnifyOnMouseEnterDirective,
    OrderByStringLengthPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RobotListService, BookDatabaseService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
