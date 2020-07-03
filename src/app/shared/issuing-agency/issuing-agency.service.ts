import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IssuingAgency } from './issuing-agency';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

@Injectable()
export class IssuingAgencyService {
  private endpoint = environment.api + '/issuing-agency';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Array<IssuingAgency>> {
    return this.httpClient.get<Array<IssuingAgency>>(this.endpoint);
  }
}
