import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarImagensComponent } from './visualizar-imagens.component';

describe('VisualizarImagensComponent', () => {
  let component: VisualizarImagensComponent;
  let fixture: ComponentFixture<VisualizarImagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarImagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
