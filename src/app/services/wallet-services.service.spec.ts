import { TestBed } from '@angular/core/testing';

import { WalletServicesService } from './wallet-services.service';

describe('WalletServicesService', () => {
  let service: WalletServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
