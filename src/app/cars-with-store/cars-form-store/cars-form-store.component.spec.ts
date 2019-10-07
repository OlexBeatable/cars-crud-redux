import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsFormStoreComponent } from './cars-form-store.component';

describe('CarsFormStoreComponent', () => {
  let component: CarsFormStoreComponent;
  let fixture: ComponentFixture<CarsFormStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsFormStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsFormStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
