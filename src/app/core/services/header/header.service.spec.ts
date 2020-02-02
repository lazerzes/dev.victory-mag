import { TestBed } from '@angular/core/testing';

import { HeaderService } from './header.service';

describe('HeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderService = TestBed.get(HeaderService);
    expect(service).toBeTruthy();
  });

  it('should update subject', () => {
    const service: HeaderService = TestBed.get(HeaderService);
    service.setDisplayHeader(true);
    expectAsync(service.getDisplayHeader().toPromise()).toBeResolvedTo(true);
  });
});
