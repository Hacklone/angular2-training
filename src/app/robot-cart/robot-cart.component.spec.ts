import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotCartComponent } from './robot-cart.component';

describe('RobotCartComponent', () => {
  let component: RobotCartComponent;
  let fixture: ComponentFixture<RobotCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
