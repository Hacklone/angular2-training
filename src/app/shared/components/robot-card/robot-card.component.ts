import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Robot} from "../../models/robot.interface";
import {BookDatabaseService} from "../../services/book-database.service";

@Component({
  selector: 'app-robot-card',
  templateUrl: 'robot-card.component.html',
  styleUrls: ['robot-card.component.css']
})
export class RobotCardComponent implements OnInit {
  @Input('robot')
  robot: Robot;

  @Output()
  onOpenRobotProfile = new EventEmitter<Robot>();

  booksFoundForRobot: string[];

  constructor(private bookDatabaseService: BookDatabaseService) { }

  async onSearchForBook() {
    const booksFound = await this.bookDatabaseService.searchForBook(this.robot.name);

    this.booksFoundForRobot = booksFound.items.map(book => book.volumeInfo.title);
  }

  onRobotDetailClick() {
    this.onOpenRobotProfile.emit(this.robot);
  }

  ngOnInit() {

  }
}
