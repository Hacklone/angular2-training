import { Component, OnInit, Input } from '@angular/core';
import { BookStoreService } from '../../services/book-store.service';

@Component({
  selector: 'app-book-search-panel',
  templateUrl: './book-search-panel.component.html',
  styleUrls: ['./book-search-panel.component.scss']
})
export class BookSearchPanelComponent implements OnInit {

  constructor(private _bookStoreService: BookStoreService) { }

  @Input()
  public searchTerm: string;

  public bookTitles: string[];

  public async searchForBooks() {
    const books: any = await this._bookStoreService.getBooksAsync(this.searchTerm);

    this.bookTitles = books.items.map(book => book.volumeInfo.title);
  }

  ngOnInit() {
  }

}
