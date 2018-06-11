import { TestBed, inject } from '@angular/core/testing';

import { GerenteClasseService } from './gerente-classe.service';

describe('GerenteClasseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GerenteClasseService]
    });
  });

  it('should be created', inject([GerenteClasseService], (service: GerenteClasseService) => {
    expect(service).toBeTruthy();
  }));
});
