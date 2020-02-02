import { TestBed } from '@angular/core/testing';

import { FooterService } from './footer.service';

describe('FooterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FooterService = TestBed.get(FooterService);
    expect(service).toBeTruthy();
  });

  it('should update subject', () => {
    const service: FooterService = TestBed.get(FooterService);
    service.setDisplayFooter(true);
    expectAsync(service.getDisplayFooter().toPromise()).toBeResolvedTo(true);
  });

});
