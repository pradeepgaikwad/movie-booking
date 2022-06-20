import { TestBed } from '@angular/core/testing';

import { MovieAdapterService } from './movie-adapter.service';

describe('MovieAdapterService', () => {
  let service: MovieAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
