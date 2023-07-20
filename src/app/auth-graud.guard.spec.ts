import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authGraudGuard } from './auth-graud.guard';

describe('authGraudGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGraudGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
