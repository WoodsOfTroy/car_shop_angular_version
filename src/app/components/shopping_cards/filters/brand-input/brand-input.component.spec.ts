import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandInputComponent } from './brand-input.component';

describe('BrandInputComponent', () => {
  let component: BrandInputComponent;
  let fixture: ComponentFixture<BrandInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
