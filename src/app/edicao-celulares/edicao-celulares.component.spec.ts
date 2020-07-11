import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoCelularesComponent } from './edicao-celulares.component';

describe('EdicaoCelularesComponent', () => {
  let component: EdicaoCelularesComponent;
  let fixture: ComponentFixture<EdicaoCelularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoCelularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoCelularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
