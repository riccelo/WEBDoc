import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgEscolherVariaveisComponent } from './dlg-escolher-variaveis.component';

describe('DlgEscolherVariaveisComponent', () => {
  let component: DlgEscolherVariaveisComponent;
  let fixture: ComponentFixture<DlgEscolherVariaveisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgEscolherVariaveisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgEscolherVariaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
