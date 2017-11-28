import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Robot } from '../../../../shared/models/robot.interface';
import { BooksService } from '../../services/books/books.service';
import { Book } from '../../services/books/book.interface';

@Component({
  selector: 'app-books-dialog',
  templateUrl: './books-dialog.component.html',
  styleUrls: ['./books-dialog.component.scss']
})
export class BooksDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public robot: Robot,
              private _booksService: BooksService) { }

  public books: Book[];

  public async ngOnInit() {
    this.books = await this._booksService.searchForBooksAsync(this.robot.name);
  }

}
