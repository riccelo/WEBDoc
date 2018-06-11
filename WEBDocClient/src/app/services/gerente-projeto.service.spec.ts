import { TestBed, inject } from '@angular/core/testing';

import { GerenteProjetoService } from './gerente-projeto.service';

describe('GerenteProjetoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GerenteProjetoService]
    });
  });

  it('should be created', inject([GerenteProjetoService], (service: GerenteProjetoService) => {
    expect(service).toBeTruthy();
  }));
});
