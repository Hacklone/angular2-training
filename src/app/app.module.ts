import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RobotCardComponent } from './shared/components/robot-card/robot-card.component';
import { RobotListComponent } from './browse/robot-list/robot-list.component';
import { RobotListService } from './shared/services/robot-list.service';
import { MagnifyDirective } from './shared/directives/magnify.directive';
import { BookStoreService } from './browse/robot-list/shared/services/book-store.service';
import { BookSearchPanelComponent } from './browse/robot-list/shared/components/book-search-panel/book-search-panel.component';
import { OrderByLengthPipe } from './shared/pipes/order-by-length.pipe';
import { AppRoutes } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { RobotProfileComponent } from './browse/robot-profile/robot-profile.component';
import { CartService } from './shared/services/cart.service';
import { BrowseComponent } from './browse/browse.component';
import { AddRobotComponent } from './browse/add-robot/add-robot.component';

@NgModule({
  declarations: [
    AppComponent,
    RobotCardComponent,
    RobotListComponent,
    MagnifyDirective,
    BookSearchPanelComponent,
    OrderByLengthPipe,
    HeaderComponent,
    RobotProfileComponent,
    BrowseComponent,
    AddRobotComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,

    AppRoutes
  ],
  providers: [
    RobotListService,
    BookStoreService,

    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
