import { Injectable } from '@angular/core';

import { LoaderState } from './loader-state';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoaderService {

  private loaderSubject = new Subject<LoaderState>();

  constructor() { }

  show() {
    this.loaderSubject.next(<LoaderState>{ show: true });
  }

  hide() {
    this.loaderSubject.next(<LoaderState>{ show: false });
  }

  getStatus() {
    return this.loaderSubject.asObservable();
  }

}
