import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosComponent } from './projeto.component';

describe('ProjectsComponent', () => {
  let component: ProjetosComponent;
  let fixture: ComponentFixture<ProjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
