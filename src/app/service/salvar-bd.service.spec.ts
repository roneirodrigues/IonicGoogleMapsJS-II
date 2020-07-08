import { TestBed } from '@angular/core/testing';

import { SalvarBDService } from './salvar-bd.service';

describe('SalvarBDService', () => {
  let service: SalvarBDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalvarBDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
