import { Component, OnInit } from '@angular/core';
import { RouteLocations } from '../shared/routing/route-locations.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public RouteLocations = RouteLocations;

  ngOnInit() {
  }

}
