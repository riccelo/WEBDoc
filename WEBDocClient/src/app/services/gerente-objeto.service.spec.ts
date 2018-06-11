import { TestBed, inject } from '@angular/core/testing';

import { GerenteObjetoService } from './gerente-objeto.service';

describe('GerenteObjetoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GerenteObjetoService]
    });
  });

  it('should be created', inject([GerenteObjetoService], (service: GerenteObjetoService) => {
    expect(service).toBeTruthy();
  }));
});
