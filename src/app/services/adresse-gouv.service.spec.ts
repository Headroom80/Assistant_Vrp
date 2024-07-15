import { TestBed } from '@angular/core/testing';

import { AdresseGouvService } from './adresse-gouv.service';

describe('AdresseGouvService', () => {
  let service: AdresseGouvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdresseGouvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
