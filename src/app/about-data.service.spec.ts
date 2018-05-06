import { TestBed, inject } from '@angular/core/testing';

import { AboutDataService } from './about-data.service';

describe('AboutDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutDataService]
    });
  });

  it('should be created', inject([AboutDataService], (service: AboutDataService) => {
    expect(service).toBeTruthy();
  }));
});
