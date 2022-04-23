import { TestBed } from '@angular/core/testing';

import { AuthHelperGuard } from './auth-helper.guard';

describe('AuthHelperGuard', () => {
  let guard: AuthHelperGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthHelperGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
