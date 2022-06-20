import { TestBed } from '@angular/core/testing';

import { MovieTrialService } from './movie-trial.service';

describe('MovieTrialService', () => {
  let service: MovieTrialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieTrialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
