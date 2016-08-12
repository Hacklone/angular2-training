import {NgModule} from "@angular/core";
import {RobotCartService} from "../shared/services/robot-cart.service";
import {RobotCartComponent} from "./robot-cart.component";
import {RobotCartRoutingModule} from "./robot-cart.route";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [RobotCartComponent],
  imports: [RobotCartRoutingModule, BrowserModule],
  providers: [RobotCartService],
  bootstrap: [RobotCartComponent]
})
export class RobotCartModule {}
