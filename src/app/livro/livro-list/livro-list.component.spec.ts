import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroListComponent } from './livro-list.component';

describe('LivroListComponent', () => {
  let component: LivroListComponent;
  let fixture: ComponentFixture<LivroListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivroListComponent]
    });
    fixture = TestBed.createComponent(LivroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
