import { Component, OnInit } from '@angular/core';
import { Robot } from '../shared/models/robot.interface';
import { RobotsService } from '../shared/services/robots/robots.service';
import { UserContextService } from '../shared/services/user-context/user-context.service';
import { User } from '../shared/models/user.interface';
import { Subscription } from 'rxjs/Subscription';
import { BooksService } from './shared/services/books/books.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BooksDialogComponent } from './shared/components/books-dialog/books-dialog.component';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.scss']
})
export class RobotListComponent implements OnInit {
  private _highestPriceSubscription: Subscription;

  constructor(private _robotsService: RobotsService,
              private _dialog: MatDialog,
              private _booksService: BooksService,
              private _userContextService: UserContextService) {

  }

  public robots: Robot[] = [];
  public robotWithHighestPrice: Robot;

  public currentlyLoggedInUser: User;

  public async ngOnInit() {
    this.robots = await this._robotsService.getRobotsAsync();

    this._highestPriceSubscription = this._robotsService.robotWithHighestPrice.subscribe((robot: Robot) => {
      this.robotWithHighestPrice = robot;
    });

    setTimeout(() => {
      this._userContextService.userObservable.subscribe((user: User) => {
        this.currentlyLoggedInUser = user;
      });
    }, 3000);
  }

  public ngOnDestroy() {
    this._highestPriceSubscription.unsubscribe();
  }

  public addRobotToCart(robot: Robot) {
    alert(robot.name);
  }

  public async loadBooksForRobotAsync(robot: Robot) {
    //const booksAboutRobot = await this._booksService.searchForBooksAsync(robot.name);

    this._dialog.open(BooksDialogComponent, <MatDialogConfig<Robot>> {
      data: robot
    });
  }
}
