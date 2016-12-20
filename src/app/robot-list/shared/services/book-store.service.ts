import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class BookStoreService {

  constructor(private _http: Http) { }

  public getBooksAsync(searchTerm: string): Promise<any[]> {
    return this._http.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .map(res => res.json())
      .toPromise();
  }
}
