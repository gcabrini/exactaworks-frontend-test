import { Injectable } from '@angular/core';

import { OrderInfo } from './order-info';

@Injectable()
export class OrderInfoService {
  private orderInfo: OrderInfo = {
    name: 'Paul Irish',
    cpf: '762.888.376-92',
    value: 2000,
    installments: 12,
    description: 'Comprar um bike'
  }

  constructor() { }

  getOrderInfo() {
    return this.orderInfo;
  }
}
