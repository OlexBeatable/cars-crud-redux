import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsWithStoreComponent } from './cars-with-store.component';

describe('CarsWithStoreComponent', () => {
  let component: CarsWithStoreComponent;
  let fixture: ComponentFixture<CarsWithStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsWithStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsWithStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
