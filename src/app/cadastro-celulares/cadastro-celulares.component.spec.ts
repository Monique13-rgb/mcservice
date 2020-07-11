import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCelularesComponent } from './cadastro-celulares.component';

describe('CadastroCelularesComponent', () => {
  let component: CadastroCelularesComponent;
  let fixture: ComponentFixture<CadastroCelularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroCelularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCelularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
