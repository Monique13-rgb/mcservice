import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarSistemaComponent } from './cadastrar-sistema.component';

describe('CadastrarSistemaComponent', () => {
  let component: CadastrarSistemaComponent;
  let fixture: ComponentFixture<CadastrarSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
