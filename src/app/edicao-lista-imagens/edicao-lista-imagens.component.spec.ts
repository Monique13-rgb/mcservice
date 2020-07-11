import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoListaImagensComponent } from './edicao-lista-imagens.component';

describe('EdicaoListaImagensComponent', () => {
  let component: EdicaoListaImagensComponent;
  let fixture: ComponentFixture<EdicaoListaImagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoListaImagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoListaImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
}

);

