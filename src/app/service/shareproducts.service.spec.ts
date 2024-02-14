import { TestBed } from '@angular/core/testing';

import { ShareproductsService } from './shareproducts.service';

describe('ShareproductsService', () => {
  let service: ShareproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
