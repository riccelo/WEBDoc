import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteVariavelComponent } from './gerente-variavel.component';

describe('GerenteVariavelComponent', () => {
  let component: GerenteVariavelComponent;
  let fixture: ComponentFixture<GerenteVariavelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenteVariavelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenteVariavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
