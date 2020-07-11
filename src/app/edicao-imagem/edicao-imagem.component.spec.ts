import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoImagemComponent } from './edicao-imagem.component';

describe('EdicaoImagemComponent', () => {
  let component: EdicaoImagemComponent;
  let fixture: ComponentFixture<EdicaoImagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoImagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
