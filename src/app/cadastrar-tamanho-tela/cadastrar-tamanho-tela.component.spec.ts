import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTamanhoTelaComponent } from './cadastrar-tamanho-tela.component';

describe('CadastrarTamanhoTelaComponent', () => {
  let component: CadastrarTamanhoTelaComponent;
  let fixture: ComponentFixture<CadastrarTamanhoTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarTamanhoTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarTamanhoTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
