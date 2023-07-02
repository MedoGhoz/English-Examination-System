import { TestBed } from '@angular/core/testing';

import { distractorsDemoService } from './distractorsDemo.service';

describe('distractorsDemoService', () => {
  let service: distractorsDemoService;
  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(distractorsDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
