import { Injectable } from '@angular/core';
import { Book } from './book.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {
  constructor(private _http: HttpClient) {

  }

  public async searchForBooksAsync(searchTerm: string): Promise<Book[]> {
    return await this._http.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}`)
      .map((result: any) => {
        return result.items.map((bookItem: any) => {
          return <Book> {
            title: bookItem.volumeInfo.title,
            author: bookItem.volumeInfo.authors.join(', '),
            iconUrl: bookItem.volumeInfo.imageLinks.smallThumbnail
          };
        });
      })
      .toPromise();
  }
}
