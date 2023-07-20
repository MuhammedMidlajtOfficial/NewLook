import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authGraudAdminGuard } from './auth-graud-admin.guard';

describe('authGraudAdminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGraudAdminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
