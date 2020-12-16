import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdFoodComponent } from './id-food.component';

describe('IdFoodComponent', () => {
  let component: IdFoodComponent;
  let fixture: ComponentFixture<IdFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
