import { TestBed, inject } from '@angular/core/testing';

import { LoaderService } from './loader.service';
import { TestingModule } from '../../testing';

describe('LoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TestingModule ]
    });
  });

  it('should be created', inject([LoaderService], (service: LoaderService) => {
    expect(service).toBeTruthy();
  }));
});
