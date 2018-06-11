import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgNovoProjetoComponent } from './dlg-novo-projeto.component';

describe('DlgNovoProjetoComponent', () => {
  let component: DlgNovoProjetoComponent;
  let fixture: ComponentFixture<DlgNovoProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgNovoProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgNovoProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
