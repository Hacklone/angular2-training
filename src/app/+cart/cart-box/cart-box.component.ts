import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { Subscription } from 'rxjs';
import { CartRobot } from '../../shared/models/cart-robot.model';

@Component({
  selector: 'app-cart-box',
  templateUrl: './cart-box.component.html',
  styleUrls: ['./cart-box.component.scss']
})
export class CartBoxComponent implements OnInit, OnDestroy {
  private _cartSubscription: Subscription;

  constructor(private _cartService: CartService) { }

  public robotsInCart: CartRobot[];

  ngOnInit() {
    this.robotsInCart = this._cartService.getAddedRobots();

    this._cartSubscription = this._cartService.onAddedRobotsChanged.subscribe(robots => {
      this.robotsInCart = robots;
    });
  }

  ngOnDestroy() {
    this._cartSubscription.unsubscribe();
  }
}
