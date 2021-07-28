import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBtnComponent } from './find-btn.component';

describe('FindBtnComponent', () => {
  let component: FindBtnComponent;
  let fixture: ComponentFixture<FindBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
