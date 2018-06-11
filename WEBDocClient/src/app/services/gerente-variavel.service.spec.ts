import { TestBed, inject } from '@angular/core/testing';

import { GerenteVariavelService } from './gerente-variavel.service';

describe('GerenteVariavelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GerenteVariavelService]
    });
  });

  it('should be created', inject([GerenteVariavelService], (service: GerenteVariavelService) => {
    expect(service).toBeTruthy();
  }));
});
