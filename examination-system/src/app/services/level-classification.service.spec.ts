import { TestBed } from '@angular/core/testing';

import { LevelClassificationService } from './level-classification.service';

describe('LevelClassificationService', () => {
  let service: LevelClassificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelClassificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
