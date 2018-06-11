import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgPastaPropriedadesComponent } from './dlg-pasta-propriedades.component';

describe('DlgPastaPropriedadesComponent', () => {
  let component: DlgPastaPropriedadesComponent;
  let fixture: ComponentFixture<DlgPastaPropriedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgPastaPropriedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgPastaPropriedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
