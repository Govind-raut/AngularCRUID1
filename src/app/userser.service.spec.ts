import { TestBed, inject } from '@angular/core/testing';

import { UserserService } from './userser.service';

describe('UserserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserserService]
    });
  });

  it('should be created', inject([UserserService], (service: UserserService) => {
    expect(service).toBeTruthy();
  }));
});
