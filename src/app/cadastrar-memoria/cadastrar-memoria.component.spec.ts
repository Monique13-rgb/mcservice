import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMemoriaComponent } from './cadastrar-memoria.component';

describe('CadastrarMemoriaComponent', () => {
  let component: CadastrarMemoriaComponent;
  let fixture: ComponentFixture<CadastrarMemoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarMemoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
