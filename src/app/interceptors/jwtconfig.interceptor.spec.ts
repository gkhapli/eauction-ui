import { TestBed } from '@angular/core/testing';

import { JwtconfigInterceptor } from './jwtconfig.interceptor';

describe('JwtconfigInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtconfigInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtconfigInterceptor = TestBed.inject(JwtconfigInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
