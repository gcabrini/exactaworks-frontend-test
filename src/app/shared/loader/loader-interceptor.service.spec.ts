import { TestBed, inject } from '@angular/core/testing';

import { LoaderInterceptorService } from './loader-interceptor.service';
import { LoaderService } from './loader.service';

import { TestingModule } from '../../testing';

describe('LoaderInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      providers: [
        LoaderInterceptorService
      ]
    });
  });

  it('should be created', inject([LoaderInterceptorService], (service: LoaderInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
