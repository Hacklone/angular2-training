import { Component, OnInit } from '@angular/core';
import { UserContextService } from '../shared/services/user-context/user-context.service';
import { User } from '../shared/models/user.interface';
import { RouteLocations } from '../shared/services/routing/route-locations.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _userContextService: UserContextService) { }

  public currentlyLoggedInUser: User;

  public RouteLocations = RouteLocations;

  ngOnInit() {
    this._userContextService.userObservable.subscribe((user: User) => {
      this.currentlyLoggedInUser = user;
    });
  }
}
