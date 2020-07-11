import { TestBed } from '@angular/core/testing';

import { TamanhoTelaService } from './tamanho-tela.service';

describe('TamanhoTelaService', () => {
  let service: TamanhoTelaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TamanhoTelaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
