import { TestBed, inject } from '@angular/core/testing';

import { ServiceDataService } from './service-data.service';

describe('ServiceDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceDataService]
    });
  });

  it('should be created', inject([ServiceDataService], (service: ServiceDataService) => {
    expect(service).toBeTruthy();
  }));
});
