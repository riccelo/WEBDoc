import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoMenuComponent } from './administracao-menu.component';

describe('AdministracaoMenuComponent', () => {
  let component: AdministracaoMenuComponent;
  let fixture: ComponentFixture<AdministracaoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracaoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracaoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
