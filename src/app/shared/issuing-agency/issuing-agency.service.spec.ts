import { TestBed, inject } from '@angular/core/testing';

import { IssuingAgencyService } from './issuing-agency.service';

import { TestingModule } from '../../testing';

describe('IssuingAgencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      providers: [
        IssuingAgencyService
      ]
    });
  });

  it('should be created', inject([IssuingAgencyService], (service: IssuingAgencyService) => {
    expect(service).toBeTruthy();
  }));
});
