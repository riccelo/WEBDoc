import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldersTreeComponent } from './folders-tree.component';

describe('FoldersTreeComponent', () => {
  let component: FoldersTreeComponent;
  let fixture: ComponentFixture<FoldersTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldersTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldersTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
