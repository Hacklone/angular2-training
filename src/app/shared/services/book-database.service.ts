import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class BookDatabaseService {
  constructor(private http: Http) {}

  public searchForBook(searchInNameTerm: string): Promise<any> {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInNameTerm}`)
      .map(res => res.json())
      .toPromise();
  }
}
