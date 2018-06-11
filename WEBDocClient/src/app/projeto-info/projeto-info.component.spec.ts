import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoInfoComponent } from './projeto-info.component';

describe('ProjectInfoComponent', () => {
  let component: ProjetoInfoComponent;
  let fixture: ComponentFixture<ProjetoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
