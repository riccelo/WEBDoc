import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteProjetoComponent } from './gerente-projeto.component';

describe('GerenteProjetoComponent', () => {
  let component: GerenteProjetoComponent;
  let fixture: ComponentFixture<GerenteProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenteProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenteProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
