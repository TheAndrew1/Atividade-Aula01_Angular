import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroDetailComponent } from './carro-detail.component';

describe('CarroDetailComponent', () => {
  let component: CarroDetailComponent;
  let fixture: ComponentFixture<CarroDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroDetailComponent]
    });
    fixture = TestBed.createComponent(CarroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
