import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgNovoObjetoComponent } from './dlg-novo-objeto.component';

describe('DlgNovoObjetoComponent', () => {
  let component: DlgNovoObjetoComponent;
  let fixture: ComponentFixture<DlgNovoObjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgNovoObjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgNovoObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
