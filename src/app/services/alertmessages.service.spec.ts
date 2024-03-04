import { TestBed } from '@angular/core/testing';

import { AlertmessagesService } from './alertmessages.service';

describe('AlertmessagesService', () => {
  let service: AlertmessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertmessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
