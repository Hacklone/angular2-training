import {NgModule} from "@angular/core";
import {RobotCardComponent} from "../shared/components/robot-card/robot-card.component";
import {RobotListService} from "../shared/services/robot-list.service";
import {RobotCartService} from "../shared/services/robot-cart.service";
import {RobotListComponent} from "./robot-list.component";
import {RobotListRoutingModule} from "./robot-list.route";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http/esm";

@NgModule({
  declarations: [RobotCardComponent, RobotListComponent],
  imports: [RobotListRoutingModule, BrowserModule, HttpModule],
  providers: [RobotListService, RobotCartService],
  bootstrap: [RobotListComponent]
})
export class RobotListModule {}
