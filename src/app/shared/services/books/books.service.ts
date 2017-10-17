import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Book } from './book.interface';

@Injectable()
export class BooksService {
  constructor(private _http: Http) {
  }

  public searchBooks(searchText: string): Observable<Book[]> {
    return this._http.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchText)}`)
      .map(res => res.json())
      .map(res => {
        return res.items.map(item => {
          return {
            title: item.volumeInfo.title,
            description: item.volumeInfo.description,
            imageUrl: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail: ''
          };
        }).slice(0, 3);
      });
  }
}
