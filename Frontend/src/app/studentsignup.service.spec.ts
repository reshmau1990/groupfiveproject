import { TestBed } from '@angular/core/testing';

import { StudentsignupService } from './studentsignup.service';

describe('StudentsignupService', () => {
  let service: StudentsignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
