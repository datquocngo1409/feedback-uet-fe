import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotRatedTeacherComponent } from './not-rated-teacher.component';

describe('NotRatedTeacherComponent', () => {
  let component: NotRatedTeacherComponent;
  let fixture: ComponentFixture<NotRatedTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotRatedTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotRatedTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
