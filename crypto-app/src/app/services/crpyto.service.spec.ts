import { TestBed } from '@angular/core/testing';

import { CrpytoService } from './crpyto.service';

describe('CrpytoService', () => {
  let service: CrpytoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrpytoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
