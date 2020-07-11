import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoMemoriaComponent } from './edicao-memoria.component';

describe('EdicaoMemoriaComponent', () => {
  let component: EdicaoMemoriaComponent;
  let fixture: ComponentFixture<EdicaoMemoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoMemoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoMemoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
