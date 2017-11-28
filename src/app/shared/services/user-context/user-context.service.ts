import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.interface';
import { Subject } from 'rxjs/Subject';

import * as Chance from 'chance';
import { ReplaySubject } from 'rxjs/ReplaySubject';

const chance = new Chance();

@Injectable()
export class UserContextService {
  private _userSubject = new ReplaySubject<User>(1);

  constructor() {
    // First load
    setTimeout(() => {
      this._userSubject.next({
        id: Math.random().toString(),
        name: chance.name()
      });
    }, 10);

    // Something happens in some seconds
    setTimeout(() => {
      this._userSubject.next({
        id: Math.random().toString(),
        name: chance.name()
      });
    }, 5000);
  }

  public get userObservable(): Observable<User> {
    return this._userSubject.asObservable();
  }
}
