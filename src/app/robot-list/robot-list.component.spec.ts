import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotListComponent } from './robot-list.component';
import { By } from '@angular/platform-browser';
import { MatCheckboxModule, MatDialog } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { OrderByPropertyPipe } from '../shared/pipes/order-by-property.pipe';
import { Router } from '@angular/router';
import { RobotsService } from '../shared/services/robots/robots.service';
import { CartService } from '../shared/services/cart/cart.service';

fdescribe('RobotListComponent', () => {
  let component: RobotListComponent;
  let fixture: ComponentFixture<RobotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RobotListComponent,
        OrderByPropertyPipe
      ],
      providers: [
        RobotsService,
        { provide: MatDialog, useValue: {} },
        { provide: CartService, useValue: {} },
        { provide: Router, useValue: {} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('add robot', () => {
    it('should add one new robot', () => {
      let robotCards = fixture.debugElement.queryAll(By.css('app-robot-card'));

      expect(robotCards.length).toEqual(2);

      const addRobotButton = fixture.debugElement.query(By.css('#add-robot-button'));

      addRobotButton.nativeElement.click();

      fixture.detectChanges();

      robotCards = fixture.debugElement.queryAll(By.css('app-robot-card'));

      expect(robotCards.length).toEqual(3);
    });
  });
});
