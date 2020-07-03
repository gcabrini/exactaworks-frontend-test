import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPageComponent } from './order-page.component';
import { OrderModule, LoaderService } from '../../shared';

import { TestingModule } from '../../testing';

describe('OrderPageComponent', () => {
  let component: OrderPageComponent;
  let fixture: ComponentFixture<OrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
        OrderModule
      ],
      declarations: [ OrderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
