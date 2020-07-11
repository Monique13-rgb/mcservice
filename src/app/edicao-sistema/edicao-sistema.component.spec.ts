import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoSistemaComponent } from './edicao-sistema.component';

describe('EdicaoSistemaComponent', () => {
  let component: EdicaoSistemaComponent;
  let fixture: ComponentFixture<EdicaoSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
