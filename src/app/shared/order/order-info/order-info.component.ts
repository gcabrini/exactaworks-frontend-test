import { Component, OnInit } from '@angular/core';

import { OrderInfo } from './order-info';
import { OrderInfoService } from './order-info.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss'],
  providers: [ OrderInfoService ]
})
export class OrderInfoComponent implements OnInit {

  private info: OrderInfo;

  constructor(service: OrderInfoService) {
    this.info = service.getOrderInfo();
  }

  ngOnInit() {
  }

}
