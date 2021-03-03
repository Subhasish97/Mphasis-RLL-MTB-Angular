import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeMoviesComponent } from './shoe-movies.component';

describe('ShoeMoviesComponent', () => {
  let component: ShoeMoviesComponent;
  let fixture: ComponentFixture<ShoeMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoeMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
