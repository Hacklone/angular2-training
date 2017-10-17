import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Book } from '../../shared/services/books/book.interface';
import { BooksService } from '../../shared/services/books/books.service';
import { Robot } from '../../shared/services/robots/robot.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-robot-dialog',
  templateUrl: './robot-dialog.component.html',
  styleUrls: ['./robot-dialog.component.scss']
})
export class RobotDialogComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;

  constructor(private _booksService: BooksService,
              private _dialogRef: MatDialogRef<RobotDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public robotForDialog: Robot) {
  }

  public booksAboutTheRobot: Book[];

  ngOnInit() {
    this._subscription = this._booksService.searchBooks(this.robotForDialog.name)
      .subscribe((books: Book[]) => {
        this.booksAboutTheRobot = books;
      })
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  public closeDialog() {
    this._dialogRef.close();
  }
}
