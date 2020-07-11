import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaotamanhoTelaComponent } from './edicaotamanho-tela.component';

describe('EdicaotamanhoTelaComponent', () => {
  let component: EdicaotamanhoTelaComponent;
  let fixture: ComponentFixture<EdicaotamanhoTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaotamanhoTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaotamanhoTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
