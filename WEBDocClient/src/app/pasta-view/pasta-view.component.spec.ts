import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaViewComponent } from './pasta-view.component';

describe('PastaViewComponent', () => {
  let component: PastaViewComponent;
  let fixture: ComponentFixture<PastaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
