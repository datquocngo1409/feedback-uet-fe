import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalTeacherComponent } from './statistical-teacher.component';

describe('StatisticalTeacherComponent', () => {
  let component: StatisticalTeacherComponent;
  let fixture: ComponentFixture<StatisticalTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticalTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
