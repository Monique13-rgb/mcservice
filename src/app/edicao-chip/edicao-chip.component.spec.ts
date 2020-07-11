import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoChipComponent } from './edicao-chip.component';

describe('EdicaoChipComponent', () => {
  let component: EdicaoChipComponent;
  let fixture: ComponentFixture<EdicaoChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
