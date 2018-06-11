import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriedadeEdicaoComponent } from './propriedade-edicao.component';

describe('PropriedadeEdicaoComponent', () => {
  let component: PropriedadeEdicaoComponent;
  let fixture: ComponentFixture<PropriedadeEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropriedadeEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropriedadeEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
