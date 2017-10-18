import { NgModule } from '@angular/core';
import { OrderByPropertyPipe } from './pipes/order-by-property.pipe';
import { RobotCardComponent } from './components/robot-card/robot-card.component';
import { ZoomDirective } from './directives/zoom.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatDialogModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RobotDialogComponent } from '../robot-list/robot-dialog/robot-dialog.component';

@NgModule({
  declarations: [
    OrderByPropertyPipe,
    RobotCardComponent,
    RobotDialogComponent,
    ZoomDirective
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    OrderByPropertyPipe,
    RobotCardComponent,
    ZoomDirective
  ],
  entryComponents: [
    RobotDialogComponent
  ]
})
export class SharedModule {
}
