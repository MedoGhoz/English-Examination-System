import { TestBed } from '@angular/core/testing';

import { VocabDemoService } from './VocabDemo.service';

describe('VocabDemoService', () => {
  let service: VocabDemoService;
  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(VocabDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
