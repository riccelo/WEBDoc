import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgInputBoxComponent } from './dlg-input-box.component';

describe('DlgInputBoxComponent', () => {
  let component: DlgInputBoxComponent;
  let fixture: ComponentFixture<DlgInputBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgInputBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
