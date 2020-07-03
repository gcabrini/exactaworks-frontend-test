import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStepsComponent } from './order-steps.component';

import { TestingModule } from '../../../testing';

describe('OrderStepsComponent', () => {
  let component: OrderStepsComponent;
  let fixture: ComponentFixture<OrderStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [ OrderStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
