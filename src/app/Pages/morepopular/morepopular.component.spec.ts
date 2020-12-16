import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorepopularComponent } from './morepopular.component';

describe('MorepopularComponent', () => {
  let component: MorepopularComponent;
  let fixture: ComponentFixture<MorepopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorepopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorepopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
