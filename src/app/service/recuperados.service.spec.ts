import { TestBed } from '@angular/core/testing';

import { RecuperadosService } from './recuperados.service';

describe('RecuperadosService', () => {
  let service: RecuperadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
