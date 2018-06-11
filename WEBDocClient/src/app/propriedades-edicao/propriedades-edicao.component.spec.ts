import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriedadesEdicaoComponent } from './propriedades-edicao.component';

describe('PropriedadesEdicaoComponent', () => {
  let component: PropriedadesEdicaoComponent;
  let fixture: ComponentFixture<PropriedadesEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropriedadesEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropriedadesEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
