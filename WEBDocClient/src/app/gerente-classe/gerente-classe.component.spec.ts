import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteClasseComponent } from './gerente-classe.component';

describe('GerenteClasseComponent', () => {
  let component: GerenteClasseComponent;
  let fixture: ComponentFixture<GerenteClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenteClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenteClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
