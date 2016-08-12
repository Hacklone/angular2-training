import {NgModule} from "@angular/core";
import {RobotCardComponent} from "../shared/components/robot-card/robot-card.component";
import {RobotListService} from "../shared/services/robot-list.service";
import {RobotCartService} from "../shared/services/robot-cart.service";
import {RobotProfileComponent} from "./robot-profile.component";
import {RobotProfileRoutingModule} from "./robot-profile.route";
import {HttpModule} from "@angular/http/esm";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [RobotCardComponent, RobotProfileComponent],
  imports: [RobotProfileRoutingModule, BrowserModule, HttpModule],
  providers: [RobotListService, RobotCartService],
  bootstrap: [RobotProfileComponent]
})
  export class RobotProfileModule {}
