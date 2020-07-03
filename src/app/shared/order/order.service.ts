import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Order } from './order';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {
  private endpoint = environment.api + '/order';

  constructor(private httpClient: HttpClient) { }

  create(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.endpoint, order);
  }
}
