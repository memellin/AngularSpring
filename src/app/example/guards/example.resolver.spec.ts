import { TestBed } from '@angular/core/testing';

import { ExampleResolver } from './example.resolver';

describe('ExampleResolver', () => {
  let resolver: ExampleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ExampleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
