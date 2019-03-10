import { TestBed } from '@angular/core/testing';

import { NutLoggerService } from './nut-logger.service';

describe('NutLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NutLoggerService = TestBed.get(NutLoggerService);
    expect(service).toBeTruthy();
  });
});
