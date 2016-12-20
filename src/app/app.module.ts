import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RobotCardComponent } from './shared/components/robot-card/robot-card.component';
import { RobotListComponent } from './robot-list/robot-list.component';
import { RobotListService } from './shared/services/robot-list.service';
import { MagnifyDirective } from './shared/directives/magnify.directive';
import { BookStoreService } from './robot-list/shared/services/book-store.service';
import { BookSearchPanelComponent } from './robot-list/shared/components/book-search-panel/book-search-panel.component';
import { OrderByLengthPipe } from './shared/pipes/order-by-length.pipe';
import { AppRoutes } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { RobotProfileComponent } from './robot-profile/robot-profile.component';
import { CartService } from './shared/services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    RobotCardComponent,
    RobotListComponent,
    MagnifyDirective,
    BookSearchPanelComponent,
    OrderByLengthPipe,
    HeaderComponent,
    RobotProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
