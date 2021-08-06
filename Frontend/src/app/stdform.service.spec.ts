import { TestBed } from '@angular/core/testing';

import { StdformService } from './stdform.service';

describe('StdformService', () => {
  let service: StdformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StdformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
