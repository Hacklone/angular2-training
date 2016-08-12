import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Robot} from "../shared/models/robot.interface";
import {BookDatabaseService} from "../shared/services/book-database.service";

@Component({
  selector: 'app-robot-card',
  templateUrl: 'robot-card.component.html',
  styleUrls: ['robot-card.component.css']
})
export class RobotCardComponent implements OnInit {
  @Input('robot')
  robot: Robot;

  @Output()
  onAddToCart = new EventEmitter<Robot>();

  booksFoundForRobot: string[];

  constructor(private bookDatabaseService: BookDatabaseService) { }

  onAddToCartButtonClick() {
    this.onAddToCart.emit(this.robot);
  }

  async onSearchForBook() {
    const booksFound = await this.bookDatabaseService.searchForBook(this.robot.name);

    this.booksFoundForRobot = booksFound.items.map(book => book.volumeInfo.title);
  }

  ngOnInit() {

  }

}