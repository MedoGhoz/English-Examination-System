import { TestBed } from '@angular/core/testing';

import { GrammarDemoService } from './grammar-Demo.service';

describe('Grammar-DemoService', () => {
  let service: GrammarDemoService;
  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(GrammarDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
