import { TestBed } from '@angular/core/testing';

import { LoadingHandlerService } from './loading-handler.service';

describe('LoadingHandlerService', () => {
  let service: LoadingHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
