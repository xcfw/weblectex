import { TestBed } from '@angular/core/testing';

import { ContlistService } from './contlist.service';

describe('ContlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContlistService = TestBed.get(ContlistService);
    expect(service).toBeTruthy();
  });
});
