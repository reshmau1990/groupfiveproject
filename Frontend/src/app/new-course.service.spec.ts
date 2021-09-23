import { TestBed } from '@angular/core/testing';

import { NewCourseService } from './new-course.service';

describe('NewCourseService', () => {
  let service: NewCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
